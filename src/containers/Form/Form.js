import React from 'react'
import {connect} from 'react-redux'
import {setFieldValue, setFieldStatus, setPendingStatus} from '../../store/actions/form'
import {setStep} from '../../store/actions/step'
import {_checkEmail} from '../../lib/helpers'
import FilmService from '../../lib/FilmService'
import InputField from '../../components/InputField'
import TextAreaField from '../../components/TextAreaField'

function Form(props) {
  const {
    setFieldValue,
    setFieldStatus,
    setPendingStatus,
    userName,
    email,
    text,
    pendingStatus,
    setStep
  } = props

  function onChangeInputHandler(fieldName, fieldValue) {
    setFieldValue(fieldName, fieldValue)
  }

  function onSubmitHandler(e) {
    e.preventDefault()
    Boolean(userName.value.trim()) ? setFieldStatus('userName', 'success') : setFieldStatus('userName', 'error')
    Boolean(text.value.trim()) ? setFieldStatus('text', 'success') : setFieldStatus('text', 'error')
    _checkEmail(email.value) ? setFieldStatus('email', 'success') : setFieldStatus('email', 'error')

    if (Boolean(userName.value.trim()) && Boolean(text.value.trim()) && _checkEmail(email.value)) {
      setPendingStatus(true)
      const filmService = new FilmService()

      filmService.falseRequest()
        .then(res => {
          setPendingStatus(false)
          setStep(3)
        })
        .catch(err => {
          setPendingStatus(false)
          console.log(err)
        })
    }
  }

  return (
    <div className="row form">
      <form onSubmit={onSubmitHandler}>
        <InputField
          type="text"
          label="Username"
          name="userName"
          data={userName}
          onChange={onChangeInputHandler}
        />
        <InputField
          type="email"
          label="Email"
          name="email"
          data={email}
          onChange={onChangeInputHandler}
        />
        <TextAreaField
          label="Review"
          name="text"
          data={text}
          onChange={onChangeInputHandler}
        />
        {/*<button className="btn btn-primary custom" type="submit">Submit form</button>*/}
        <button className="btn btn-primary custom" type="submit">
          {pendingStatus ?
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            : `Submit form`
          }
        </button>
      </form>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    userName: state.form.userName,
    email: state.form.email,
    text: state.form.text,
    pendingStatus: state.form.pendingStatus
  }
}

function mapDispatchToProps(dispatch) {
  return{
    setFieldValue: (fieldName, fieldValue) => dispatch(setFieldValue(fieldName, fieldValue)),
    setFieldStatus: (fieldName, fieldStatus) => dispatch(setFieldStatus(fieldName, fieldStatus)),
    setPendingStatus: status => dispatch(setPendingStatus(status)),
    setStep: step => dispatch(setStep(step))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)