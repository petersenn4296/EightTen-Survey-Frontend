import {
  NAVIGATE,
  CHANGE_CTS_VIEW,
  LOAD_CLIENTS,
  LOAD_TRAITS,
  LOAD_SURVEYS,
  LOAD_CLIENT
} from '../actions'

const initialState = {
  view: 'login',
  CTSView: 'Clients',
  CTSData: [],
  dataText: 'company_name'
}

export default (state = initialState, action) => {
  switch (action.type) {

    case NAVIGATE:
      return {
        ...state,
        view: action.payload.destination,
        item: action.payload.item
      }

    case CHANGE_CTS_VIEW:
      return {
        ...state,
        CTSView: action.payload.view,
        dataText: action.payload.data
      }

    case LOAD_CLIENTS:
      return {
        ...state,
        clients: action.payload
    }

    case LOAD_CLIENT:
      return {
        ...state,
        client: action.payload
    }

    case LOAD_TRAITS:
      return {
        ...state,
        traits: action.payload
    }

    case LOAD_SURVEYS:
      return {
        ...state,
        surveys: action.payload
    }


    default: return state
  }
}
