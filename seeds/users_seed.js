
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({ id: 1, userName: 'Texas Mix', password: '$2a$10$9r3GArVIM4mYi1zRqbPt7OII2Q36qHKjMe7Y6E78hUjs1EEO8vw2m' }),
        knex('users').insert({ id: 2, userName: 'Puerto Rican Piet', password: '$2a$10$nF7nY0z/USnmNmpyp3SUIO7WwZG3PXr7C.CgaDDdiYLM.L8Nu5VaO'}),
        knex('users').insert({ id: 3, userName: 'Jalapeno Joseph', password: '$2a$10$dLqxYwrweDhv79mQVKGRLOj.dPJgJXgzQ1E4ifyz.JlDHscN3GTLu'})
      ]);
    });
};
