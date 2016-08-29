var test = require('tape')
var request = require('supertest')
var app = require('../app')

request(app)
  .get('/api/v1/account/2/transactions')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res) {
    var data = res.body


test('api delivers the right')
