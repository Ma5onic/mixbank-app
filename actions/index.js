import request from 'superagent'

//populates the transactions based on the account id
const receiveAccountInfo = (payload) => {
  return {
    type: 'RECEIVE_ACCOUNT_INFO',
    payload: payload
  }
}

// gets account number based on the user id
const receiveUserInfo = (payload) => {
  return {
    type: 'RECEIVE_USER_INFO',
    payload: payload
  }
}

const fetchUserInfo = () => {
  return (dispatch) => {
    request.get(`/api/v1/user/accounts`)
      .end( (err, res) => {
        if (err) {
          console.log("Bother, something went wrong", err)
          return
        }
        dispatch(receiveUserInfo(res.body))
      })
  }
}


const fetchAccountInfo = (account_id) => {
  return (dispatch) => {
    request.get(`/api/v1/accounts/${account_id}/transactions`)
      .end( (err, res) => {
        if (err) {
          console.log("Bother, something went wrong", err)
          return
        }
        dispatch(receiveAccountInfo(res.body))
      })
  }
}

export {
  receiveAccountInfo,
  fetchAccountInfo,
  receiveUserInfo,
  fetchUserInfo
}
