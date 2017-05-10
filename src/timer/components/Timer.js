import React from 'react'
import { padStart } from 'lodash/string'
import { round } from 'lodash/math'
import moment from 'moment'

import Clock from './Clock'
import TimerButton from './TimerButton'

class Timer extends React.Component {
  constructor (props) {
    super(props)
    const _limit = moment(`00:${props.limit}:00`, 'HH:mm:ss')

    this.state = {
      running: false,
      limit: _limit,
      start: _limit
    }

    this.countDown = this.countDown.bind(this)
    this.startStop = this.startStop.bind(this)
  }

  nextMilliseconds (time) {
    return time.clone().add(-1, 'seconds')
  }

  countDown () {
    const t = setInterval(() => {
      this.setState({
        // limit: round(this.state.limit - 0.01, 2),
        limit: this.nextMilliseconds(this.state.limit),
        running: true
      })

      if (this.state.limit.seconds() <= 0 && this.state.limit.minutes() <= 0) {
        clearInterval(t)
        this.setState({
          limit: this.state.start,
          running: false
        })
      }
    }, 1000)
  }

  startStop () {
    if (this.state.running) {
      this.setState({
        limit: this.state.start,
        running: false
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
