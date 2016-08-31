import React from 'react'
import {connect} from 'react-redux'
import Account from '../components/account'
import TransactionsByAccount from '../connectors/TransactionsByAccount'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchUserInfo (session.user_id)
    console.log("this is props when App component mounts: ", this.props);
  }

  render() {
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>

        <TransactionsByAccount />
      </div>
    )
  }

}

export default App
