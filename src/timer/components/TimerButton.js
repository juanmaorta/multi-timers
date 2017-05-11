import React from 'react'

const getButtonText = (on) => {
  if (on) return 'Restart'

  return 'Start'
}

const TimerButton = (props) => {
  return (
    <button onClick={() => props.onClick()}>{getButtonText(props.on)}</button>
  )
}

export default TimerButton
