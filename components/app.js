import React from 'react'
import {connect} from 'react-redux'
import Account from '../components/account'
import TransactionsByAccount from '../connectors/TransactionsByAccount'

class App extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.getAccountId()
  }

  render() {
    return (
      <div>
        <h1>Welcome to Mix Bank!</h1>
        {this.props.account_id ? <TransactionsByAccount /> : null }
      </div>
    )
  }

}

export default App
