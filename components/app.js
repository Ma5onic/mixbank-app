import React from 'react'
import {connect} from 'react-redux'
import Account from '../components/account'
import TransactionsByAccount from '../connectors/TransactionsByAccount'

class App extends React.Component {

  componentDidMount() {
    console.log(this.props);
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
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actionCreators, dispatch) }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)

export default App

//
// LoadAccount = connect()(LoadAccount)
//
// let LoadAccount = ( {dispatch} ) => (
//   dispatch(fetchAccountInfo(1))
//   )
