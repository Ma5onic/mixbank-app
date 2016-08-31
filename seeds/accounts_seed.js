
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('accounts').insert({id: 1, user_id: 2}),
        knex('accounts').insert({id: 2, user_id: 3}),
        knex('accounts').insert({id: 3, user_id: 1})
      ]);
    });
};
