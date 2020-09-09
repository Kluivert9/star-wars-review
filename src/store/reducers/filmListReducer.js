import {
  LOAD_FILMS,
  SET_ACTIVE_FILM_ID,
  SET_STATUS,
  SET_CURRENT_FILM_STATUS,
  SET_CURRENT_FILM_DATA,
  SET_DEFAULT_STATE_FILM
} from '../actions/actionTypes'

const initialState = {
  status: 'loading', // success, error, loading
  currentFilmStatus: 'default', // default, success, error, loading
  filmList: [],
  currentFilmData: null,
  activeFilmId: null
};

export default function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_FILMS:
      return {
        ...state,
        filmList: action.payload
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.payload
      }
    case SET_ACTIVE_FILM_ID:
      return {
        ...state,
        activeFilmId: action.payload
      }
    case SET_CURRENT_FILM_STATUS:
      return {
        ...state,
        currentFilmStatus: action.payload
      }
    case SET_CURRENT_FILM_DATA:
      return {
        ...state,
        currentFilmData: action.payload
      }
    case SET_DEFAULT_STATE_FILM:
        return {
          ...initialState
        }
    default:
      return state
  }
}