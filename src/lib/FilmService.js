import {_transformFilmList, _transformFilm} from './helpers'

export default class FilmService {
  _apiBase = 'https://swapi.dev/api/films/'

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`)

    if(!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase}${url}, status: ${res.status}`)
    }

    return await res.json()
  }

  getAllFilms = async () => {
    const films = await this.getResource('')

    return films.results.map(film => _transformFilmList(film))
  }

  getFilm = async id => {
    const film = await this.getResource(`${id}`)

    return _transformFilm(film)
  }

  falseRequest() {
    return new Promise(resolve => setTimeout(resolve, 1000))
  }
}