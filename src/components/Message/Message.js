import React from 'react'

function Message({render}) {
  return (
    <div className="spinner-wrap">
      {render()}
    </div>
  )
}

export default Message