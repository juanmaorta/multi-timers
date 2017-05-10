import defaultState from './state'

import {
  ADD_TIMER,
} from './actions'

export default (state = defaultState, action) => {
  switch (action.type) {

    case ADD_TIMER:
      console.log('state', state)
      return {
        ...state,
        timers: state.timers.concat({name: 'Timer name'})
      }
    default:
      return state
  }
}
