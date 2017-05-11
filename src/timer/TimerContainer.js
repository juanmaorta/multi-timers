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

  for (let i = 0; i < max; i++) {
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
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <form onSubmit={this.handleSubmit} className='form-inline'>
                <div className='form-group'>
                  <div className='input-group'>
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
                  </div>
                  <button type='submit' className='btn btn-primary'>Add timer</button>
                </div>
              </form>
            </div>
          </div>
        </nav>
        <div>
          {renderTimers(this.props.timers)}
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerContainer)
