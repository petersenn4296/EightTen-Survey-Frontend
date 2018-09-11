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
export const UPDATE_CREDENTIALS = 'UPDATE_CREDENTIALS'
export const LOGIN = 'LOGIN'

const API = 'http://localhost:3000/'

export const addQuestion = (question) => {
  console.log('add question function', question);
  return async dispatch => {
    const response = await fetch(`${API}questions`, {
      method: 'POST',
      body: JSON.stringify(question),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const message = await response.json()
    console.log('action line 28', message);
    dispatch ({
      type: ADD_QUESTION,
      // payload: message
    })
  }
}

export const questionDataDispatch = (key, value) => {
  console.log('the key and value', key, value);
  return dispatch => {
    questionData(key, value, dispatch)
  }
}

export const questionData = (key, value, dispatch) => {
  dispatch({
    type: QUESTION_DATA,
    payload: {key: key, value: value}
  })
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


export const navigate = (destination, item = null, questionObj = null, trait_id = null) => {
  return dispatch => {
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
      questionData('question', item.question, dispatch)
      questionData('type', item.type, dispatch)
    } else {
      data = 'company_name'
    }
    dispatch({
      type: NAVIGATE,
      payload: {destination: destination, item: item, dataText: data, questionObj: questionObj, trait_id: trait_id}
    })
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

export const login = (email, password) => {
  console.log('LOGIN ACTIONS: ', email, password);
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
    console.log('LOGIN USER DATA RESPONSE: ', userData)
    dispatch ({
      type: LOGIN,
      payload: userData
    })
  }
}
