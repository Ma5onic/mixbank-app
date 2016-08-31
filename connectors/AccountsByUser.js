import React from 'react'
import { connect } from 'react-redux'
import App from '../components/app'
import {} from '../actions/index'

const mapStateToProps = (state) => {
  return {
    account_id: state.account.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserInfo: (id) => { dispatch(fetchUserInfo(id)) }      // this is redux-thunk accepting a function
    // fetchAccountInfo: (id) => { fetchAccountInfo(id)(dispatch) }   // how redux-thunk works under the hood

  }
}

const AccountsByUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AccountsByUser
