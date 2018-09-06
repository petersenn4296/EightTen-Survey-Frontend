export const NAVIGATE = 'NAVIGATE'
export const CHANGE_CTS_VIEW = 'CHANGE_CTS_VIEW'
export const LOAD_CLIENTS = 'LOAD_CLIENTS'
export const LOAD_TRAITS = 'LOAD_TRAITS'
export const LOAD_SURVEYS = 'LOAD_SURVEYS'

export const navigate = destination => {
  return {
    type: NAVIGATE,
    payload: destination
  }
}

export const changeCTSView = view => {
  return {
    type: CHANGE_CTS_VIEW,
    payload: view
  }
}

export const loadClients = () => {
  return {
    type: LOAD_CLIENTS,
    payload: 'clients'
  }
}

export const loadTraits = () => {
  return {
    type: LOAD_TRAITS,
    payload: 'traits'
  }
}

export const loadSurveys = () => {
  return {
    type: LOAD_SURVEYS,
    payload: 'surveys'
  }
}
