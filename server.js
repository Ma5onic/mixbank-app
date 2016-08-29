var app = require('./app')

const PORT = process.env.PORT || 8080

app.listen(PORT, function() {
  console.log('server is running and listening on port', PORT)
})
