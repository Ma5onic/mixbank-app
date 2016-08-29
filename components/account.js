import React from 'react'


function Account (props) {
  return (
    <div>
      <h1>Welcome to the Account bit of the app</h1>
        <ul>{props.transactions.map(function (transaction, index) {
        return (
        <p key={index}>
        {transaction.description}  ${transaction.amount}
        </p>
      )
    }
  )}</ul>

    </div>
  )
}

export default Account
