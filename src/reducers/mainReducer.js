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
  BUTTONS
} from '../actions'

const initialState = {
  view: 'login',
  CTSView: 'Clients',
  button1: 'Traits',
  button2: 'Surveys',
  CTSData: [],
  dataText: 'company_name',
  back: 0
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

    case NAVIGATE:
    let ap = action.payload
    backStack.push(ap.destination, ap.item, ap.dataText)
    state.back++
      return {
        ...state,
        view: ap.destination,
        item: ap.item,
        dataText: ap.dataText,
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
        back: 0
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
        client: action.payload
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


    default: return state
  }
}
