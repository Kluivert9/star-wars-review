import React from 'react'
import cn from 'classnames'

function InputField(props) {
  const {
    type,
    label,
    name,
    data : {value, status},
    onChange
  } = props

  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        className={cn('form-control', {'is-invalid': status === 'error'}, {'is-valid': status === 'success'})}
        id={label}
        value={value}
        onChange={e => onChange(name, e.target.value)}
      />
    </div>
  )
}

export default InputField