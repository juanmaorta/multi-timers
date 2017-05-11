import React from 'react'
import { connect } from 'react-redux'

import Timer from './components/Timer'
import { addTimer } from './actions'

const mapStateToProps = (state, own) => ({
  timers: state.timer.timers
})

const mapDispatchToProps = (dispatch) => ({
  addTimer: (name, minutes) => {
    return dispatch(addTimer(name, minutes))
  }
})

const renderTimers = (timerList) => {
  if (timerList.length === 0) return null

  return timerList.map((timer, idx) => {
    return <Timer
      name={timer.name}
      limit={timer.limit}
      key={idx}
    />
  })
}

const renderOptions = (max = 10) => {
  const tags = []

  for (let i = 1; i < max; i++) {
    tags.push(<option value={i} key={i}>{i} min</option>)
  }

  return tags
}

class TimerContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      minutes: 0
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit (evt) {
    evt.preventDefault()
    this.props.addTimer(this.state.name, this.state.minutes)
  }

  handleChange (evt) {
    const name = evt.target.name
    const value = evt.target.value

    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name='name'
            onChange={this.handleChange}
            placeholder='Your timer name'
            required
            type='text'
          />
          <select
            name='minutes'
            onChange={this.handleChange}
          >
            {renderOptions(10)}
          </select>
          <input type='submit' value='Add timer' />
        </form>

        {renderTimers(this.props.timers)}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerContainer)
