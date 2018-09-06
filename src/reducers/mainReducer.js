import {
  NAVIGATE,
  CHANGE_CTS_VIEW
} from '../actions'

const initialState = {
  view: 'login',
  CTSView: 'Clients',
  CTSData: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case NAVIGATE:
      return {
        ...state,
        view: action.payload
      }

    case CHANGE_CTS_VIEW:
      return {
        ...state,
        CTSView: action.payload
      }


    default: return state
  }
}
