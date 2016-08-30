var test = require('tape')
var request = require('supertest')
var app = require('../app')

request(app)
  .get('/api/v1/accounts/1/transactions')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res) {
    var data = res.body
    test('api delivers the right data', (t) => {
      t.error(err, 'there should be no error')

      t.true(data.account, 'there is a top level "account" key')

      t.true(Array.isArray(data.account.transactions), 'a "transactions" array is delivered')

      t.equal(Number(data.account.id), 1, 'account id is the same as url')

      t.end()
      process.exit()
    })
  })
