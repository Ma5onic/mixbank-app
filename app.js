const express = require('express')
const path = require('path')
const db = require ('./data/db')
var bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/v1/accounts/:id/transactions', function(req, res) {
  var id = Number(req.params.id)
  db.getTransactionsByAccountId(id)
  .then(function (data) {
    res.send(
      {
        account:{
          id: id,
          transactions: data
        }
      }
    )
  })
})

app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'login.html'))
})

app.post('/login', function(req, res) {
  console.log("this is the login stuff: ", req.body)
  password = req.body.password
  userName = req.body.userName
  console.log("this is the login stuff: ", password, userName)
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app
