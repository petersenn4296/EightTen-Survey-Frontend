export const NAVIGATE = 'NAVIGATE'
export const CHANGE_CTS_VIEW = 'CHANGE_CTS_VIEW'
export const LOAD_CLIENTS = 'LOAD_CLIENTS'
export const LOAD_TRAITS = 'LOAD_TRAITS'
export const LOAD_SURVEYS = 'LOAD_SURVEYS'
export const LOAD_CLIENT = 'LOAD_CLIENT'


const API = 'http://localhost:3000/'

export const navigate = (destination, item = null) => {
  return {
    type: NAVIGATE,
    payload: {destination: destination, item: item}
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
    console.log(client);
    dispatch({
      type: LOAD_CLIENT,
      payload: client
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
