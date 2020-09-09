import {SET_STEP} from './actionTypes'

export function setStep(step){
  return {
    type: SET_STEP,
    payload: step
  }
}