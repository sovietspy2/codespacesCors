var express = require('express')
var cors = require('cors')
var app = express()

const corsOptions = {
    origin: 'https://6af1820c-d6d6-4297-8de9-7a778ccb5ce2-3000.apps.codespaces.githubusercontent.com',
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    credentials: true
  }

app.use(cors(corsOptions))

app.get('/test', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 8080');
  console.log("https://localhost:8080")
})