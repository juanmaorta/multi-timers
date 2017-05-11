import defaultState from './state'

import {
  ADD_TIMER
} from './actions'

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TIMER:
      return {
        ...state,
        timers: state.timers.concat(
          {
            name: action.name,
            limit: action.minutes
          }
        )
      }
    default:
      return state
  }
}
