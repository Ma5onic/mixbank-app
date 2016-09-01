
const initialState = {
  account:
    {
      id: null,
      transactions:[]
    }
}

const reducer = function (state = initialState, action) {
  var newState
  switch (action.type) {

    case 'RECEIVE_ACCOUNT_ID':
    newState = Object.assign( {}, state )
    newState.account.id = action.payload.account_id
    return newState

    case 'RECEIVE_ACCOUNT_TRANSACTIONS':
    newState = Object.assign( {}, state, {account: action.payload.account} )
    return newState

    default:
    return state
  }
}

module.exports = reducer
