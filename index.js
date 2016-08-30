import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import App from './components/app'

const initialState = {
  account:
    {
      id: 1,
      transactions:[]
    }
}


const reducer = function (state = initialState, action) {
  switch (action.type) {

    case 'RECEIVE_ACCOUNT_INFO':
    const newState = Object.assign( {}, state, {account: action.payload.account} )
    return newState

    default:
    return state
  }
}

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware)
)

render(
  <Provider store={store}>
    <App name='Mix Bank' />
  </Provider>,
  document.querySelector('main')
)
