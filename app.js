const express = require('express')
const path = require('path')
const db = require ('./data/db')
const bodyParser = require('body-parser')
const session = require('express-session')

const api = require('./routes/api')

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

app.use('/api/v1', api)

//get route for log in page (server-side)
app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'login.html'))
})

//login post route takes in a user object with name and password
//runs db method to get a user id to match
//saves user's name and id to the session
app.post('/login', function(req, res) {
  var userName = req.body.userName
  var password = req.body.password
//find the row in the database by the userName
  db.findUserIdByUserName(userName) //will return the row as an object
    .then( function(data) {
      var hashedPassword = data.password
      var user_id = data.id
      bcrypt.compare(password, hashedPassword, function(err, result) {
        if (result) {
          req.session.userName = userName
          req.session.user_id = user_id
          res.redirect('/' + userName)
        }
        else {
          res.send(`<p>Oops wrong name or password</p>`)
          }
      })
    })
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app
