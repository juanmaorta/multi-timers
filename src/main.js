import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Root from './Root'
// import {persistStore, autoRehydrate} from 'redux-persist'
import rootReducer from './reducers.js'

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

/*
persistStore(store)
*/

render(
  <Root store={store} />,
    document.getElementById('app')
)
