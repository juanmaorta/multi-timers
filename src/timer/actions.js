export const ADD_TIMER = 'ADD_TIMER'

export const addTimer = (name, minutes) => ({
  type: ADD_TIMER,
  name,
  minutes
})
