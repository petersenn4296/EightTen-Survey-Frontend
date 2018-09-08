export const NAVIGATE = 'NAVIGATE'
export const CHANGE_CTS_VIEW = 'CHANGE_CTS_VIEW'
export const LOAD_CLIENTS = 'LOAD_CLIENTS'
export const LOAD_TRAITS = 'LOAD_TRAITS'
export const LOAD_SURVEYS = 'LOAD_SURVEYS'
export const LOAD_CLIENT = 'LOAD_CLIENT'
export const LOAD_TRAIT = 'LOAD_TRAIT'
export const LOAD_SURVEY = 'LOAD_SURVEY'
export const BACK = 'BACK'


const API = 'http://localhost:3000/'

export const navigate = (destination, item = null) => {
  let data = ''
  if (destination === 'Clients'){
    data = ''
  } else if (destination === 'Traits'){
    data = 'trait'
  } else if (destination === 'Surveys'){
    data = 'question'
  } else {
    data = 'company_name'
  }
  return {
    type: NAVIGATE,
    payload: {destination: destination, item: item, dataText: data}
  }
}

export const back = () => {
  return {
    type: BACK
  }
}

export const changeCTSView = view => {
  let data = ''
  if (view === 'Clients'){
    data = 'company_name'
  } else if (view === 'Traits'){
    data = 'trait'
  } else if (view === 'Surveys'){
    data = 'name'
  }
  return {
    type: CHANGE_CTS_VIEW,
    payload: {view: view, data: data}
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
    dispatch({
      type: LOAD_CLIENT,
      payload: client
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
