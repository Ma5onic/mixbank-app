import request from 'superagent'

const receiveAccountInfo = (payload) => {
  return {
    type: 'RECEIVE_ACCOUNT_INFO',
    payload: payload
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
  fetchAccountInfo
}
