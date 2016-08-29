import React from 'react'
import { connect } from 'react-redux'
import Account from '../components/account'

const mapStateToProps = function (state) {
  return {transactions: state.account.transactions}
}

const TransactionsByAccount = connect(mapStateToProps)(Account)
export default TransactionsByAccount
