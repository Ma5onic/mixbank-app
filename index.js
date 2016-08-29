import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/app'

const initialState = {
  account:
    {
      id: 1,
      transactions:[
        {
          id:503,
          amount: 456,
          description: 'purchase bk',
          from_account_id: 1,
          to_account_id: 2
        },
        {
          id:504,
          amount: 56700,
          description: 'weekly pay from bk',
          from_account_id: 2,
          to_account_id: 1
        }
      ]
    }
}

const reducer = function (state = initialState , action) {
  return state
}

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App name='Mix Bank' />
  </Provider>,
  document.querySelector('main')
)
