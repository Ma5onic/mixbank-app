var config = require ('../knexfile').development
var knex = require ('knex') (config)

function getTransactionsByAccountId (id) {
  return knex('transactions').where('from_account_id', id).orWhere('to_account_id', id)
}

module.exports = {
  getTransactionsByAccountId
}
