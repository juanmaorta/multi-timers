import React from 'react'

const getButtonText = (on) => {
  if (on) return 'Reset'

  return 'Start'
}

const TimerButton = (props) => {
  return (
    <button onClick={() => props.onClick()}>{getButtonText(props.on)}</button>
  )
}

export default TimerButton
