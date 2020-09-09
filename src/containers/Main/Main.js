import React, {useEffect} from 'react'
import FilmService from '../../lib/FilmService'
import {
  loadFilms,
  setStatus,
  setActiveFilmId,
  setCurrentFilmStatus,
  setCurrentFilmData
} from '../../store/actions/filmList'
import {setStep} from '../../store/actions/step'
import {connect} from 'react-redux'
import Spinner from '../../components/Spinner'
import Message from '../../components/Message'
import FilmList from '../../components/FilmList'
import CurrentFilm from '../../components/CurrentFilm'

function Main(props) {
  const {
    filmList,
    status,
    currentFilmStatus,
    activeFilmId,
    loadFilms,
    setStatus,
    setActiveFilmId,
    setCurrentFilmStatus,
    currentFilmData,
    setCurrentFilmData,
    setStep
  } = props

  useEffect(() => {
    const filmService = new FilmService()
    setStatus('loading')
    filmService.getAllFilms()
      .then(res => {
        loadFilms(res)
        setStatus('success')
      })
      .catch(err => setStatus('error'))
  }, [])

  useEffect(() => {
    if (activeFilmId) {
      const filmService = new FilmService()
      setCurrentFilmStatus('loading')
      filmService.getFilm(activeFilmId)
        .then(res => {
          setCurrentFilmData(res)
          setCurrentFilmStatus('success')
        })
        .catch(err => setCurrentFilmStatus('error'))
    }
  }, [activeFilmId])

  function onSelectFilmHandler(id) {
    setActiveFilmId(id)
  }

  function onGoToReview() {
    if (currentFilmStatus === 'success') {
      setStep(2)
    }
  }

  return (
    <div className="row main">
      <div className="col-3 main__element">
        {
          status === 'loading' && <Spinner /> ||
          status === 'success' && <FilmList
                                    filmList={filmList}
                                    onSelectFilm={onSelectFilmHandler}
                                    onGoToReview={onGoToReview}
                                  /> ||
          status === 'error' && <Message render={() => <p>Что-то пошло не так!!!</p>}/>
        }
      </div>
      <div className="col main__element">
        {
          currentFilmStatus === 'default' && <Message render={() => <p>Выберите фильм!!!</p>}/> ||
          currentFilmStatus === 'loading' && <Spinner /> ||
          currentFilmStatus === 'success' && <CurrentFilm data={currentFilmData}/> ||
          currentFilmStatus === 'error' && <Message render={() => <p>Что-то пошло не так!!!</p>}/>
        }
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    filmList: state.filmList.filmList,
    status: state.filmList.status,
    currentFilmStatus: state.filmList.currentFilmStatus,
    activeFilmId: state.filmList.activeFilmId,
    currentFilmData: state.filmList.currentFilmData
  }
}

function mapDispatchToProps(dispatch) {
  return{
    loadFilms: data => dispatch(loadFilms(data)),
    setStatus: status => dispatch(setStatus(status)),
    setActiveFilmId: id => dispatch(setActiveFilmId(id)),
    setCurrentFilmStatus: status => dispatch(setCurrentFilmStatus(status)),
    setCurrentFilmData: data => dispatch(setCurrentFilmData(data)),
    setStep: step => dispatch(setStep(step))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)