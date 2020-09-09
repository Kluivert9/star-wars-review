import React from 'react'
import {connect} from 'react-redux'
import {setDefaultStateFilm} from '../../store/actions/filmList'
import {setDefaultStateForm} from '../../store/actions/form'
import {setStep} from '../../store/actions/step'

function FinalScreen(props) {
  const {
    userName,
    email,
    text,
    setDefaultStateFilm,
    setDefaultStateForm,
    setStep
  } = props

  function onClickHandler() {
    setDefaultStateFilm()
    setDefaultStateForm()
    setStep(1)
  }

  return (
    <div className="main">
      <h3>Поздравляю, вы успешно оставили рецензию на фильм!</h3>
      <p>Выши данные:</p>
      <p>UserName: {userName}</p>
      <p>Email: {email}</p>
      <p>Review: <br /> {text}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onClickHandler}
      >To main</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    userName: state.form.userName.value,
    email: state.form.email.value,
    text: state.form.text.value,  }
}

function mapDispatchToProps(dispatch) {
  return{
    setDefaultStateFilm: () => dispatch(setDefaultStateFilm()),
    setDefaultStateForm: () => dispatch(setDefaultStateForm()),
    setStep: step => dispatch(setStep(step))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinalScreen)