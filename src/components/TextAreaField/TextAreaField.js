import React from 'react'
import cn from 'classnames'

function TextAreaField(props) {
  const {
    label,
    name,
    data : {value, status},
    onChange
  } = props

  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <textarea
        className={cn('form-control', {'is-invalid': status === 'error'}, {'is-valid': status === 'success'})}
        id={label}
        value={value}
        onChange={e => onChange(name, e.target.value)}
      />
    </div>
  )
}

export default TextAreaField