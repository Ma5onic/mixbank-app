const express = require('express')
const path = require('path')
const db = require ('./data/db')

const app = express()

const PORT = 9876

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/v1/accounts/:id/transactions', function(req, res) {
  var id = req.params.id
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

[{}, {}]

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


app.listen(PORT, function() {
  console.log('server is running and listening on port', PORT)
})
