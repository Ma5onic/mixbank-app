const express = require('express')
const path = require('path')
const db = require ('./data/db')
const bodyParser = require('body-parser')
const session = require('express-session')

var bcrypt = require('bcrypt')
const saltRounds = 10

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

app.get('/api/v1/user/accounts/:id/transactions', function(req, res) {
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

//takes user_id from the session, and returns the account_id as object
app.get('/api/v1/user/accounts', function(req, res) {
  var id = Number(req.session.user_id)
  db.findAccountsByUserId(id)
    .then(function (data) {
      res.send(
        { account_id: data }
      )
  })
})

//get route for log in page (server-side)
app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'login.html'))
})

//login post route takes in a user object with name and password
//runs db method to get a user id to match
//post route saves user's name and id to the session
app.post('/login', function(req, res) {
  var userName = req.body.userName
  var password = req.body.password
//find the row in the database by the userName
  db.findUserIdByUserName(userName) //will return the row as an object
    .then( function(data) {
      var hashedPassword = data.password
      var user_id = data.id
       //get the hashedPassword out
      console.log("the three things from the login post route: ", userName, password, hashedPassword);
      bcrypt.compare(password, hashedPassword, function(err, result) {
        if (result) {
          req.session.userName = userName
          req.session.user_id = user_id
          res.redirect('/' + userName)
        }
        else {
          res.send('Oops wrong name or password - go back to the login page and try again')
          }
      })
    })
})




app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app
