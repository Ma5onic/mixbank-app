import React from 'react'
import { connect } from 'react-redux'
import Account from '../components/account'
import {fetchAccountTransactions} from '../actions/index'

const mapStateToProps = (state) => {
  return {
    transactions: state.account.transactions,
    account_id: state.account.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAccountTransactions: (id) => { dispatch(fetchAccountTransactions(id)) }
  }
}

const TransactionsByAccount = connect(
  mapStateToProps,
  mapDispatchToProps
)(Account)

export default TransactionsByAccount
