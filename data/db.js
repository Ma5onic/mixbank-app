var env = process.env.NODE_ENV || 'development'

var config = require ('../knexfile')[env]
var knex = require ('knex') (config)

function getTransactionsByAccountId (id) {
  return knex('transactions')
    .where('from_account_id', id)
    .orWhere('to_account_id', id)
}

function findIdByUsername (userObject) {
  return knex('users')
    .where( {userName: userObject.userName, password: userObject.password} )
    .then ( function (data) {
      if (data[0]) return data[0].id
      else return
    })
}

function findAccountsByUserId (user_id) {
  return knex('accounts')
    .where( 'user_id', user_id)
    .then ( function (data) {
      console.log(data);
      if (data[0]) return data[0].id //currently assumes only one account per user
      else return
    })
}


module.exports = {
  getTransactionsByAccountId,
  findIdByUsername,
  findAccountsByUserId
}
