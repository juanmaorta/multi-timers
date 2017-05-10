import React from 'react'

import TimerContainer from './timer/TimerContainer'

class Root extends React.Component {
  render () {
    return (
      <div>
        <TimerContainer
          store={this.props.store}
          timers={this.props.timers}
        />
      </div>
    )
  }
}

export default Root
