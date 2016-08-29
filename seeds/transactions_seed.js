
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('transactions').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('transactions').insert({id: 1, description: 'bought food at bk', from_account_id: 1, to_account_id: 2, amount: 456}),
        knex('transactions').insert({id: 2, description: 'weekly wage from bk', from_account_id: 2, to_account_id: 1, amount: 56700}),
        knex('transactions').insert({id: 3, description: 'miscallaneous', from_account_id: 3, to_account_id: 2, amount: 6000})
      ]);
    });
};
