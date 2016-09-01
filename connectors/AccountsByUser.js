import React from 'react'
import { connect } from 'react-redux'
import App from '../components/app'
import { getAccountId } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    account_id: state.account.id,
    // user_id: state.user_id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAccountId: () => { dispatch(getAccountId()) }
  }
}

const AccountsByUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AccountsByUser
