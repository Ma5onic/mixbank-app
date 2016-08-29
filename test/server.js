var app = require('../app.js')
var request = require('supertest')
var test = require('tape')




  request(app)
        .get('/api/v1/accounts/1/transactions')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res){
            var data = res.body

            test('The api endpoint should return an object containing an account object with id and transactions keys',(t) => {
            t.error(err, 'there should be no error')
            t.true(data.account.id,'the data should contain an account object with an id key')
            t.equal(typeof(data.account.id), 'number' ,'the id key should have a number in it')
            t.true(data.account.transactions,'the data should contain an account object with a transactions key')
            t.true(Array.isArray(data.account.transactions),'the transactions key should have an array in it')
            t.equal(data.account.id, 1, 'test that the url id is equal to the account id received from the api')
            t.end()
            process.exit()
          })
      })
