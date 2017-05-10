import React from 'react'

const Clock = (props) => {
  return (
    <div>
      <h2>{props.time.toString()}</h2>
    </div>
  )
}

export default Clock
