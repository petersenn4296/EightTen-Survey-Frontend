import {
  NAVIGATE
} from '../actions'

const initialState = {
  logged_in: false,
  CTSView: 'clients',
  view: 'login'
}

export default (state = initialState, action) => {

  switch (action.type) {

    case NAVIGATE:
      console.log('hi')
      // switch(action.payload) {
      //
      //   case 'CTSView':
      //     return state.view = action.payload
      //
      //   default:
      //     return state
      //
      // }


    default:
      return state
  }
}
