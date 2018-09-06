export const NAVIGATE = 'NAVIGATE'
export const CHANGE_CTS_VIEW = 'CHANGE_CTS_VIEW'

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
