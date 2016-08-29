
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('accounts',function(t){
    t.increments('id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('accounts')
};
