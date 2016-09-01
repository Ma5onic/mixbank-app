import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import AccountsByUser from './connectors/AccountsByUser'
import App from './components/app'
import reducer from './reducers/reducer'

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
