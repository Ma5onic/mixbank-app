import React from 'react'
import { connect } from 'react-redux'
import App from '../components/app'
import { fetchUserInfo } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    account_id: state.account.id,
    user_id: state.user_id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserInfo: () => { dispatch(fetchUserInfo()) }      // this is redux-thunk accepting a function
    // fetchAccountInfo: (id) => { fetchAccountInfo(id)(dispatch) }   // how redux-thunk works under the hood

  }
}

const AccountsByUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AccountsByUser
