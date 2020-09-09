import {combineReducers} from 'redux'
import filmListReducer from './filmListReducer'
import formReducer from './formReducer'
import stepReducer from './stepReducer'

export default combineReducers({
  filmList: filmListReducer,
  form: formReducer,
  step: stepReducer
});