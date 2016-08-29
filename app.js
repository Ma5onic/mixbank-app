const express = require('express')
const path = require('path')
const db = require ('./data/db')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/v1/accounts/:id/transactions', function(req, res) {
  db.getTransactionsByAccountId(req.params.id)
  .then(function (data) {
    res.send(data)
  })
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app
