import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import AccountsByUser from './connectors/AccountsByUser'

import App from './components/app'

const initialState = {
  account:
    {
      id: null,
      transactions:[]
    }
}


const reducer = function (state = initialState, action) {
  var newState
  switch (action.type) {

    case 'RECEIVE_ACCOUNT_INFO':
    newState = Object.assign( {}, state, {account: action.payload.account} )
    return newState

    case 'STORE_ACCOUNT_ID':
    newState = Object.assign( {}, state )
    newState.account.id = action.payload
    return newState

    case 'RECEIVE_USER_INFO':
    newState = Object.assign( {}, state )
    newState.account.id = action.payload.account_id
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
    <AccountsByUser />
  </Provider>,
  document.querySelector('main')
)
