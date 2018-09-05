export const NAVIGATE = 'NAVIGATE'

export const navigate = (destination) => {
  const action = {
    type: NAVIGATE,
    payload: destination
  }
  return dispatch(action)
}
