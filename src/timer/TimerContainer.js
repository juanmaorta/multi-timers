import React from 'react'
import { connect } from 'react-redux'

import Timer from './components/Timer'
import { addTimer } from './actions'

const mapStateToProps = (state, own) => ({
  timers: state.timer.timers,
})

const mapDispatchToProps = (dispatch) => ({
  addTimer: () => {
    return dispatch(addTimer())
  }
})

const renderTimers = (timerList) => {
  if (timerList.length === 0) return null

  return timerList.map((timer) => {
    return <Timer
      name={timer.name}
    />
  })
}

class TimerContainer extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div>
        {renderTimers(this.props.timers)}

        <button onClick={() => this.props.addTimer()}>Add timer</button>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerContainer)
