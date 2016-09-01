import React from 'react'

class Account extends React.Component {

  componentDidMount(){
     this.props.fetchAccountInfo(this.props.account_id)
  }

  calculateBalance(transactionsArray) {
    if (transactionsArray.length === 0) {
      return 0
    }
    return transactionsArray
      .map( transaction => transaction.amount )
      .reduce( (prev, curr) => prev + curr )
  }

  render() {
    return (
      <div>
        <h2>Your transactions are:</h2>
          <ul>{this.props.transactions.map(function (transaction, index) {
            return (
              <p key={index}>
              {transaction.description}  ${transaction.amount/100}
              </p>
              )
            }
          )}
        </ul>
        <h2>And your balance is ${ (this.calculateBalance(this.props.transactions))/100 }</h2>
      </div>
    )
  }

}

export default Account
