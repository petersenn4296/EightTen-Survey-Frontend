import {
  NAVIGATE,
  CHANGE_CTS_VIEW,
  LOAD_CLIENTS,
  LOAD_TRAITS,
  LOAD_SURVEYS
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

    case LOAD_CLIENTS:
      return {
        ...state,
        // clients: action.payload
        clients: [{company_name: 'EightTen', first_name: 'rich'}, {company_name: 'Slater Flooring', first_name: 'Jeff'}, {company_name: 'Vape House', first_name: 'Ben'}, {company_name: 'Cow R Us', first_name: 'Peter'}]
    }

    case LOAD_TRAITS:
      return {
        ...state,
        // traits: action.payload
        traits: [{trait: 'Employee Impact'}, {trait: 'Community'}, {trait: 'Talent'}]
    }

    case LOAD_SURVEYS:
      return {
        ...state,
        // surveys: action.payload
        surveys: action.payload
    }


    default: return state
  }
}
