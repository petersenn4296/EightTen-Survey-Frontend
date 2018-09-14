import {
  NAVIGATE,
  CHANGE_CTS_VIEW,
  LOAD_CLIENTS,
  LOAD_TRAITS,
  LOAD_SURVEYS,
  LOAD_CLIENT,
  LOAD_TRAIT,
  LOAD_SURVEY,
  BACK,
  BUTTONS,
  QUESTION_DATA,
  ADD_QUESTION,
  EDIT_RESPONSE,
  UPDATE_CREDENTIALS,
  LOGIN,
  ADD_OPTION,
  NEW_USER,
  RETRIEVE_QUESTIONS_BY_CLIENT_ID,
  INITIALIZE_QUESTIONS
} from '../actions'

const initialState = {
  view: 'login',
  survey: [],
  CTSView: 'Clients',
  button1: 'Traits',
  button2: 'Surveys',
  CTSData: [],
  dataText: 'company_name',
  back: 0,
  questionObj: {
    survey_id: null,
    question: null,
    type: null,
    optionsArray: []
  },
  viewData: [],
  employee_impact: [],
  community_impact: [],
  talent_lifecycle: [],
  response: {},
  email: '',
  password: '',
  is_admin: false,
  first_name: '',
  client_id: null,
  is_logged_in: false,
  login_error: '',
  questions: {}
}

class Stack {
  constructor() {
    this.size = 0
    this.storage = {}
  }
  push(view, item, dataText){
    let size = this.size++
    this.storage[size] = {
      view: view,
      item: item,
      dataText: dataText
    }
  }
  pop(){
    let size = this.size - 1 , deletedData
    if(size){
      deletedData = this.storage[size]
      delete this.storage[size];
      this.size--
      return deletedData
    }
  }
}

const backStack = new Stack()
backStack.push('login')

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_OPTION:
      return {
        ...state,
        questionObj: {...state.questionObj, optionsArray: [...state.questionObj.optionsArray, action.payload]}
      }

    case NAVIGATE:
    let ap = action.payload
    backStack.push(ap.destination, ap.item, ap.dataText)
    state.back++
    let viewData
    if (ap.trait_id === 1) viewData = state.employee_impact
    if (ap.trait_id === 2) viewData = state.community_impact
    if (ap.trait_id === 3) viewData = state.talent_lifecycle
      return {
        ...state,
        view: ap.destination,
        item: ap.item,
        dataText: ap.dataText,
        trait_id: ap.trait_id,
        viewData: viewData
      }

    case EDIT_RESPONSE:
      return {
        ...state,
        response: action.payload
      }

    case ADD_QUESTION:
      return {
        ...state
      }

    case QUESTION_DATA:
      let key = action.payload.key
      let value = action.payload.value
      return {
        ...state,
        questionObj: {
          ...state.questionObj,
          [key]: value
        }
      }

      case UPDATE_CREDENTIALS:
        return {
          ...state,
          [action.payload.key]: action.payload.value
        }

    case BACK:
    backStack.pop()
    state.back--
    let back = backStack.storage[backStack.size - 1]
    if(state.back === 0){
      return {
        view: 'login',
        CTSView: 'Clients',
        button1: 'Traits',
        button2: 'Surveys',
        CTSData: [],
        dataText: 'company_name',
        back: 0,
        questionObj: {
          survey_id: null,
          question: null,
          value: null,
          type: null
        },
        viewData: [],
        employee_impact: [],
        community_impact: [],
        talent_lifecycle: [],
        response: {},
        email: '',
        password: '',
        is_admin: false,
        first_name: '',
        client_id: null,
        is_logged_in: false,
        login_error: '',
        questions: {}
      }
    } else {
      if (back.view === 'CTSView') {
        return {
          ...state,
          view: 'CTSView',
          item: back.item,
          dataText: back.dataText
        }
      } else {
        return {
          ...state,
          view: back.view,
          item: back.item,
          dataText: back.dataText
        }
      }
    }

    case BUTTONS:
      return {
        ...state,
        button1: action.payload.button1,
        button2: action.payload.button2
      }

    case CHANGE_CTS_VIEW:
      backStack.storage[backStack.size - 1].CTSView = action.payload.view
      backStack.storage[backStack.size - 1].dataText = action.payload.data
      return {
        ...state,
        CTSView: action.payload.view,
        dataText: action.payload.data,
        button1: action.payload.buttons.button1,
        button2: action.payload.buttons.button2
      }

    case LOAD_CLIENTS:
      return {
        ...state,
        clients: action.payload
    }

    case LOAD_CLIENT:
      return {
        ...state,
        client: action.payload.client,
        employee_impact: action.payload.employee_impact,
        community_impact: action.payload.community_impact,
        talent_lifecycle: action.payload.talent_lifecycle
    }

    case LOAD_TRAITS:
      return {
        ...state,
        traits: action.payload
    }

    case LOAD_TRAIT:
      return {
        ...state,
        trait: action.payload
    }

    case LOAD_SURVEYS:
      return {
        ...state,
        surveys: action.payload
    }

    case LOAD_SURVEY:
      return {
        ...state,
        survey: action.payload
    }

    case LOGIN:
      if (action.payload.errorMessage) {
        return {
          ...state,
          login_error: action.payload.errorMessage
        }
      } else {
        return {
          ...state,
          first_name: action.payload.first_name,
          client_id: action.payload.id,
          is_admin: action.payload.is_admin,
          is_logged_in: true
        }
      }

    case NEW_USER:
      return {
        ...state,
        first_name: action.payload.first_name,
        is_admin: action.payload.is_admin,
        client_id: action.payload.id,
        is_logged_in: true
      }

    case RETRIEVE_QUESTIONS_BY_CLIENT_ID:
    console.log(action.payload);
      return {
        ...state,

      }

    case INITIALIZE_QUESTIONS:
    console.log(action.payload);
      return {
        ...state,
        questions: action.payload.questions,
        choices: action.payload.choices
      }


    default: return state
  }
}
