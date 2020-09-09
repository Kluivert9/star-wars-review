import {
  SET_FIELD_VALUE,
  SET_FIELD_STATUS,
  SET_PENDING_STATUS,
  SET_DEFAULT_STATE_FORM
} from './actionTypes'

export function setFieldValue(fieldName, fieldValue) {
  return {
    type: SET_FIELD_VALUE,
    fieldName,
    fieldValue
  }
}

export function setFieldStatus(fieldName, fieldStatus) {
  return {
    type: SET_FIELD_STATUS,
    fieldName,
    fieldStatus
  }
}

export function setPendingStatus(status) {
  return {
    type: SET_PENDING_STATUS,
    payload: status
  }
}

export function setDefaultStateForm() {
  return {
    type: SET_DEFAULT_STATE_FORM
  }
}