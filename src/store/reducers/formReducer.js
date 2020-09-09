import {
  SET_FIELD_VALUE,
  SET_FIELD_STATUS,
  SET_PENDING_STATUS,
  SET_DEFAULT_STATE_FORM
} from '../actions/actionTypes'

const initialState = {
  pendingStatus: false,
  userName: {
    value: '',
    status: 'default' // default, success, error
  },
  email: {
    value: '',
    status: 'default' // default, success, error
  },
  text: {
    value: '',
    status: 'default' // default, success, error
  }
}

export default function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FIELD_VALUE:
      return {
        ...state,
        [action.fieldName] : {
          value: action.fieldValue,
          status: 'default'
        }
      }
    case SET_FIELD_STATUS:
      return {
        ...state,
        [action.fieldName] : {
          ...state[action.fieldName],
          status: action.fieldStatus
        }
      }
    case SET_PENDING_STATUS:
      return {
        ...state,
        pendingStatus: action.payload
      }
    case SET_DEFAULT_STATE_FORM:
      return {
        ...initialState
      }
    default:
      return state
  }
}