import React from 'react'
import Account from '../components/account'
import TransactionsByAccount from '../connectors/TransactionsByAccount'


function App (props) {
  return (
    <div>
      <h1>Welcome to {props.name}</h1>

      <TransactionsByAccount />
    </div>
  )
}

export default App
