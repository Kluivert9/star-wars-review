function _extractId(item) {
  const idRegExp = /\/([0-9]*)\/$/;

  return item.url.match(idRegExp)[1]
}

function _transformFilmList(film) {
  const id = _extractId(film);

  return {
    id: +id,
    title: film.title
  }
}

function _transformFilm(film) {
  return {
    title: film.title,
    description: film.opening_crawl
  }
}

function _checkEmail(email) {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

  return reg.test(email)
}

export {
  _transformFilmList,
  _transformFilm,
  _checkEmail
}