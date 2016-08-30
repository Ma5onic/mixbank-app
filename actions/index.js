import request from 'superagent'

export const receiveAccountInfo = (payload) => {
  return {
    type: 'RECEIVE_ACCOUNT_INFO',
    payload: payload
  }
}

export function fetchAccountInfo (account_id) {
  return (dispatch) =>{
    request
      .get(`/api/v1/accounts/${account_id}/transactions`)
      .end( (err, res) => {
        if (err) {
          console.log("Bother, something went wrong", err)
          return
        }
      dispatch(receiveAccountInfo(res.body))
    })
  }
}
