var env = process.env.NODE_ENV || 'development'

var config = require ('../knexfile')[env]
var knex = require ('knex') (config)


function findUserIdByUserName (name) {
  return knex('users')
    .where( 'userName', name )
    .then ( function (data) {
      if (data[0]) return data[0]
      else return
    })
}

//currently returns only one account (assumes only one per user)
function findAccountsByUserId (user_id) {
  return knex('accounts')
    .where( 'user_id', user_id)
    .then ( function (data) {
      if (data[0]) return data[0].id
      else return
    })
}

function getTransactionsByAccountId (id) {
  return knex('transactions')
  .where('from_account_id', id)
  .orWhere('to_account_id', id)
}

module.exports = {
  getTransactionsByAccountId,
  findUserIdByUserName,
  findAccountsByUserId
}
