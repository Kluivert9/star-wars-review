import React from 'react'
import {connect} from 'react-redux'

function FilmList({filmList, activeFilmId, onSelectFilm, onGoToReview}) {
  const films = filmList.map(film => {
    const {id} = film

    return (
      <li
        key={id}
        className={activeFilmId === id ? 'main__film-list_active' : ''}
        onClick={() => onSelectFilm(id)}
      >
        {film.title}
      </li>
    )
  })

  return (
      <>
        <ul className="main__film-list">
          {films}
        </ul>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onGoToReview}
        >Select episode</button>
      </>
  )
}

function mapStateToProps(state) {
  return {
    activeFilmId: state.filmList.activeFilmId
  }
}

export default connect(mapStateToProps, null)(FilmList)