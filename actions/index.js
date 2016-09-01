import request from 'superagent'

//function used by App component to get the account id
//based on the user stored in the session
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

//populates the transactions array based on the account id
const receiveAccountTransactions = (payload) => {
  return {
    type: 'RECEIVE_ACCOUNT_TRANSACTIONS',
    payload: payload
  }
}

const fetchAccountTransactions = (account_id) => {
  return (dispatch) => {
    request.get(`/api/v1/accounts/${account_id}/transactions`)
      .end( (err, res) => {
        if (err) {
          console.log("Bother, something went wrong", err)
          return
        }
        dispatch(receiveAccountTransactions(res.body))
      })
  }
}

export {
  receiveAccountTransactions,
  fetchAccountTransactions,
  receiveAccountId,
  getAccountId
}
