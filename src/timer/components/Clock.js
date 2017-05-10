import React from 'react'
import { padStart } from 'lodash/string'
import moment from 'moment'

const padTime = (time) => {
  return padStart(time, 2, '0')
}

const displayTime = (time) => {

  return moment(time).format('h:mm:ss')
}

const Clock = (props) => {
  return (
    <div>
      <h2>{props.time.toString()}</h2>
    </div>
  )
}

export default Clock
