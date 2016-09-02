var express = require('express')
var router = express.Router()
const db = require ('../data/db')

router.get('/user/accounts/:id/transactions', function(req, res) {
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
router.get('/user/accounts', function(req, res) {
  var id = Number(req.session.user_id)
  db.findAccountsByUserId(id)
    .then(function (data) {
      res.send(
        { account_id: data }
      )
  })
})


module.exports = router
