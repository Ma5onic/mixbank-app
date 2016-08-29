
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('transactions',function(t){
    t.increments('id')
    t.string('description')
    t.integer('from_account_id')
    t.integer('to_account_id')
    t.integer('amount')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('transactions')
};
