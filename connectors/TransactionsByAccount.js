import React from 'react'
import { connect } from 'react-redux'
import Account from '../components/account'
import {fetchAccountInfo} from '../actions/index'

const mapStateToProps = (state) => {
  return {
    transactions: state.account.transactions,
    account_id: state.account.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAccountInfo: (id) => { dispatch(fetchAccountInfo(id)) }      // this is redux-thunk accepting a function
    // fetchAccountInfo: (id) => { fetchAccountInfo(id)(dispatch) }   // how redux-thunk works under the hood

  }
}

const TransactionsByAccount = connect(
  mapStateToProps,
  mapDispatchToProps
)(Account)

export default TransactionsByAccount
