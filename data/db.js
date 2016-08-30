var env = process.env.NODE_ENV || 'development'

var config = require ('../knexfile')[env]
var knex = require ('knex') (config)

function getTransactionsByAccountId (id) {
  return knex('transactions').where('from_account_id', id).orWhere('to_account_id', id)
}

module.exports = {
  getTransactionsByAccountId
}
