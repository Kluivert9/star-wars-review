import {SET_STEP} from '../actions/actionTypes'

const initialState = {
  step: 1
}

export default function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STEP:
      return {
        step: action.payload
      }
    default:
      return state
  }
}