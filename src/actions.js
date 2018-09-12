export const NAVIGATE = 'NAVIGATE'
export const CHANGE_CTS_VIEW = 'CHANGE_CTS_VIEW'
export const LOAD_CLIENTS = 'LOAD_CLIENTS'
export const LOAD_TRAITS = 'LOAD_TRAITS'
export const LOAD_SURVEYS = 'LOAD_SURVEYS'
export const LOAD_CLIENT = 'LOAD_CLIENT'
export const LOAD_TRAIT = 'LOAD_TRAIT'
export const LOAD_SURVEY = 'LOAD_SURVEY'
export const BACK = 'BACK'
export const BUTTONS = 'BUTTONS'
export const QUESTION_DATA = 'QUESTION_DATA'
export const ADD_QUESTION = 'ADD_QUESTION'
export const EDIT_RESPONSE = 'EDIT_RESPONSE'
export const UPDATE_CREDENTIALS = 'UPDATE_CREDENTIALS'
export const LOGIN = 'LOGIN'
export const NEW_USER = 'NEW_USER'


const API = 'http://localhost:3000/'

export const editTraitResponse = (response, id) => {
  let obj = {
    trait_id: id,
    response
  }
  return async dispatch => {
    await fetch(`${API}traits/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
  }
}

export const addQuestion = (question) => {
  if(question.id){
    let obj = {
      question: question.question,
      value: question.value,
      type: question.type
    }
    return async dispatch => {
      await fetch(`${API}questions/${question.id}`, {
        method: 'PATCH',
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
    }
  } else {
    return async dispatch => {
      await fetch(`${API}questions`, {
        method: 'POST',
        body: JSON.stringify(question),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      dispatch ({
        type: ADD_QUESTION,
      })
    }
  }
}

export const questionDataDispatch = (key, value) => {
    return dispatch => {
      questionData(key, value, dispatch)
    }
}

export const questionData = (key, value, dispatch) => {
  if(key === 'response'){
    dispatch({
      type: EDIT_RESPONSE,
      payload: value
    })
  } else {
    dispatch({
      type: QUESTION_DATA,
      payload: {key: key, value: value}
    })
  }
}

export const updateCredentials = (key, value) => {
  return {
    type: UPDATE_CREDENTIALS,
    payload: {
      key: key,
      value: value
    }
  }
}

export const back = () => {
  return {
    type: BACK
  }
}

export const changeCTSView = view => {
  let data = ''
  let buttons
  if (view === 'Clients'){
    data = 'company_name'
    buttons = {
      button1: 'Traits',
      button2: 'Surveys'
    }
  } else if (view === 'Traits'){
    data = 'trait'
    buttons = {
      button1: 'Clients',
      button2: 'Surveys'
    }
  } else if (view === 'Surveys'){
    data = 'name'
    buttons = {
      button1: 'Clients',
      button2: 'Traits'
    }
  }
  return {
    type: CHANGE_CTS_VIEW,
    payload: {view: view, data: data, buttons: buttons}
  }
}

export const loadClients = () => {
  return async dispatch => {
    const response = await fetch(`${API}users`)
    const clients = await response.json()
    dispatch({
      type: LOAD_CLIENTS,
      payload: clients
    })
  }
}

export const loadClient = (id) => {
  return async dispatch => {
    const response = await fetch(`${API}users/${id}/responses`)
    const client = await response.json()
    const employeeImpactQuestions = client.filter(client => client.trait_id === 1)
    const communityImpactQuestions = client.filter(client => client.trait_id === 2)
    const talentLifeCycleQuestions = client.filter(client => client.trait_id === 3)
    dispatch({
      type: LOAD_CLIENT,
      payload: {
        client: client,
        employee_impact: employeeImpactQuestions,
        community_impact: communityImpactQuestions,
        talent_lifecycle: talentLifeCycleQuestions
      }
    })
  }
}

export const loadTrait = (id) => {
  return async dispatch => {
    const response = await fetch(`${API}traits/${id}`)
    const trait = await response.json()
    dispatch({
      type: LOAD_TRAITS,
      payload: trait
    })
  }
}

export const loadTraits = () => {
  return async dispatch => {
    const response = await fetch(`${API}traits`)
    const traits = await response.json()
    dispatch({
      type: LOAD_TRAITS,
      payload: traits
    })
  }
}

export const loadSurvey = (id) => {
  return async dispatch => {
    const response = await fetch(`${API}survey/${id}`)
    const survey = await response.json()
    dispatch({
      type: LOAD_SURVEY,
      payload: survey
    })
  }
}

export const loadSurveys = () => {
  return async dispatch => {
    const response = await fetch(`${API}survey`)
    const surveys = await response.json()
    dispatch({
      type: LOAD_SURVEYS,
      payload: surveys
    })
  }
}

export const navigateDispatch = (destination, item = null, questionObj = null, trait_id = null) => {
  return dispatch => {
    navigate(dispatch, destination, item, questionObj, trait_id)
  }
}

export const navigate = (dispatch, destination, item = null, questionObj = null, trait_id = null) => {
  let data = ''
  if (destination === 'Clients'){
    data = 'trait'
  } else if (destination === 'Traits'){
    data = 'trait'
  } else if (destination === 'Surveys'){
    data = 'question'
  } else if (destination === 'CompanyTraitView'){
    trait_id = item.id
    data = 'question'
  } else if (destination === 'SpecificQuestionView'){
    console.log('item', item);
    questionData('question', item.question, dispatch)
    questionData('type', item.type, dispatch)
    questionData('id', item.question_id, dispatch)
  } else {
    data = 'company_name'
  }
  dispatch({
    type: NAVIGATE,
    payload: {destination: destination, item: item, dataText: data, questionObj: questionObj, trait_id: trait_id}
  })
}

export const login = (email, password) => {
  const user = {
    email: email,
    password: password
  }
  return async dispatch => {
    const response = await fetch(`${API}login`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const userData = await response.json()
    if (userData.errorMessage) {
      dispatch({
        type: LOGIN,
        payload: userData
      })
    } else if (userData.is_admin) {
      navigate(dispatch, 'CTSView')
      dispatch({
        type: LOGIN,
        payload: userData
      })
    } else if (!userData.is_admin) {
      console.log('User Data is not Admin', userData);
      dispatch({
        type: LOGIN,
        payload: userData
      })
    }
  }
}

export const newUser = (email, password, first_name, last_name, phone, title, company_name, size, location) => {
  const user = { email, password, first_name, last_name, phone, title, company_name, size, location }
  return {
    type: NEW_USER,
    payload: user
  }
}
