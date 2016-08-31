
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({ id: 1, userName: 'Texas Mix', password: 'taco' }),
        knex('users').insert({ id: 2, userName: 'Puerto Rican Piet', password: 'tamale'}),
        knex('users').insert({ id: 3, userName: 'Jalapeno Joseph', password: 'Monkey'})
      ]);
    });
};
