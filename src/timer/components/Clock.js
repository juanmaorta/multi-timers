import React from 'react'
import { padStart } from 'lodash/string'

const padTime = (timeout) => {
  return padStart(timeout, 2, '0')
}

const Clock = (props) => {
  return (
    <div>
      <h1>{padTime(props.time.minutes())}:{padTime(props.time.seconds())}</h1>
    </div>
  )
}

export default Clock
