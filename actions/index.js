import request from 'superagent'

//uses the user_id stored in the session to get the account_id via the API
const getAccountId = () => {
  return (dispatch) => {
    request
      .get(`/api/v1/user/accounts`)
      .end( (err, res) => {
        if (err) {
          console.log("Bother!", err)
          return
        }
        dispatch(receiveAccountId(res.body))
      })
  }
}

// action for bringing the account id into state
const receiveAccountId = (payload) => {
  return {
    type: 'RECEIVE_ACCOUNT_ID',
    payload: payload
  }
}

//uses account id to get transactions via API
const fetchAccountTransactions = (account_id) => {
  return (dispatch) => {
    request.get(`/api/v1/user/accounts/${account_id}/transactions`)
      .end( (err, res) => {
        if (err) {
          console.log("Bother, something went wrong", err)
          return
        }
        dispatch(receiveAccountTransactions(res.body))
      })
  }
}

//populates the transactions array based on the account id
const receiveAccountTransactions = (payload) => {
  return {
    type: 'RECEIVE_ACCOUNT_TRANSACTIONS',
    payload: payload
  }
}

export {
  receiveAccountTransactions,
  fetchAccountTransactions,
  receiveAccountId,
  getAccountId
}
