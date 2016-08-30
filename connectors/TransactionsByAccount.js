import React from 'react'
import { connect } from 'react-redux'
import Account from '../components/account'
import {fetchAccountInfo} from '../actions/index'

const mapStateToProps = (state) => {
  return {
    transactions: state.account.transactions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAccountInfo: () => { dispatch(fetchAccountInfo(1)) }
  }
}

const TransactionsByAccount = connect(
  mapStateToProps,
  mapDispatchToProps
)(Account)
export default TransactionsByAccount
