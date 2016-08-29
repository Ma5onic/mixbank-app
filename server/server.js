const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 9876

app.use(express.static(path.join(__dirname, 'public')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, function() {
  console.log('server is running and listening on port', PORT)
})