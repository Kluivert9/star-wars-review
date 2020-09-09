import {
  LOAD_FILMS,
  SET_STATUS,
  SET_ACTIVE_FILM_ID,
  SET_CURRENT_FILM_STATUS,
  SET_CURRENT_FILM_DATA,
  SET_DEFAULT_STATE_FILM
} from './actionTypes'

export function loadFilms(itemList) {
  return {
    type: LOAD_FILMS,
    payload: itemList
  }
}

export function setStatus(status) {
  return {
    type: SET_STATUS,
    payload: status
  }
}

export function setActiveFilmId(id) {
  return {
    type: SET_ACTIVE_FILM_ID,
    payload: id
  }
}

export function setCurrentFilmStatus(status) {
  return {
    type: SET_CURRENT_FILM_STATUS,
    payload: status
  }
}

export function setCurrentFilmData(data) {
  return {
    type: SET_CURRENT_FILM_DATA,
    payload: data
  }
}

export function setDefaultStateFilm() {
  return {
    type: SET_DEFAULT_STATE_FILM
  }
}