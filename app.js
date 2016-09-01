const express = require('express')
const path = require('path')
const db = require ('./data/db')
const bodyParser = require('body-parser')
const session = require('express-session')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(session({
  name: 'testcookie',
  secret: 'my secret for more secret flavoured cookies',
  maxAge: 1000*60*2,    // 2 minutes
  resave: true,         // read about this option: https://www.npmjs.com/package/express-session#resave
  saveUninitialized: false
}))

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

app.get('/api/v1/user/accounts', function(req, res) {
  var id = Number(req.session.user_id)
  db.findAccountsByUserId(id)
  .then(function (data) {
    res.send(
      {
        account_id: data,
      }
    )
  })
})

app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'login.html'))
})

app.post('/login', function(req, res) {
  password = req.body.password
  userName = req.body.userName
  db.findIdByUsername( {userName: userName, password: password} )
    .then( function(user_id) {
      if (user_id) {
        req.session.userName = userName
        req.session.user_id = user_id
        res.redirect('/')
      }
      else {
        res.send('Oops wrong name or password')
      }
    })
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app
