export const NAVIGATE = 'NAVIGATE'

export const navigate = destination => {
  return {
    type: NAVIGATE,
    payload: destination
  }
}
