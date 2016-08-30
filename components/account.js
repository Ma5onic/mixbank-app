import React from 'react'


class Account extends React.Component {

  componentDidMount(){
    console.log('this is the props!',this.props);
  }

  calculateBalance(transactionsArray) {
  return transactionsArray.map( transaction => transaction.amount )
                            .reduce( (prev, curr) => prev + curr )
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Account bit of the app</h1>
          <ul>{this.props.transactions.map(function (transaction, index) {
          return (
          <p key={index}>
          {transaction.description}  ${transaction.amount/100}
          </p>
            )
          }
        )}</ul>
          <h2>Balance is ${ (this.calculateBalance(this.props.transactions))/100 }</h2>

      </div>
    )
  }

}

export default Account
