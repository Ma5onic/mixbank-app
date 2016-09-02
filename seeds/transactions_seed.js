
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('transactions').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('transactions').insert({id: 1, description: 'Bought a quarter pounder', from_account_id: 1, to_account_id: 2, amount: 456}),
        knex('transactions').insert({id: 2, description: 'Bought a quarter horse, sweet', from_account_id: 2, to_account_id: 1, amount: 56700}),
        knex('transactions').insert({id: 3, description: 'Horse feed', from_account_id: 3, to_account_id: 2, amount: 6000}),
        knex('transactions').insert({id: 4, description: 'Rodeo supplies', from_account_id: 3, to_account_id: 1, amount: 6000}),
        knex('transactions').insert({id: 5, description: 'Giant wall to stop Mexicans', from_account_id: 2, to_account_id: 1, amount: 900000}),
        knex('transactions').insert({id: 6, description: 'Hot sauce for James', from_account_id: 3, to_account_id: 1, amount: 255})        
      ]);
    });
};
