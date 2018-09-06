import {
  NAVIGATE
} from '../actions'

const initialState = {
  view: 'login',
  CTSView: 'clients'
}

export default (state = initialState, action) => {
  switch (action.type) {

    case NAVIGATE:
      return {
        ...state,
        view: action.payload
      }


    default: return state
  }
}
