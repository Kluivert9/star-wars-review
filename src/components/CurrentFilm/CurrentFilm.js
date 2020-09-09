import React from 'react'
import Logo from '../Logo'

function CurrentFilm(props) {
  const {data: {title, description}} = props

  return (
    <>
      <Logo />
      <div className="main__text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </>
  )
}

export default CurrentFilm