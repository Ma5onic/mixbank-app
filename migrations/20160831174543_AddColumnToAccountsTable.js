
exports.up = function(knex, Promise) {
  return knex.schema.table('accounts', function (t) {
    t.string('user_id')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.table('accounts', function (t) {
    t.dropColumn('user_id')
  })
};
