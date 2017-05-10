import React from 'react'
import { padStart } from 'lodash/string'
import { round } from 'lodash/math'
import countdown from 'countdown'
import moment from 'moment'

import Clock from './Clock'
import TimerButton from './TimerButton'

class Timer extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      running: false,
      limit: parseInt(props.limit, 10),
      start: parseInt(props.limit, 10)
    }

    this.countDown = this.countDown.bind(this)
    this.startStop = this.startStop.bind(this)
  }

  countDown () {
    const t = setInterval(() => {
      this.setState({
        limit: round(this.state.limit -0.01, 2),
        running: true
      })

      if (this.state.limit <= 0) {
        clearInterval(t)
        this.setState({
          limit: this.state.start,
          running: false
        })
      }
    }, 10)
  }

  startStop () {
    if (this.state.running) {
      this.setState({
        limit: 0
      })

      return
    }

    this.countDown()
  }

  render () {
    return (
      <div>
        <h1>{this.props.name}: {padStart(this.props.limit, 2, '0')} min</h1>
        <Clock
          time={this.state.limit}
        />
        <TimerButton
          on={this.state.running}
          onClick={this.startStop}
        />
      </div>
    )
  }
}

export default Timer
