'use strict'

require('dotenv').config()
const express = require('express')
var bodyParser = require('body-parser')
const router = require('./Controllers')

const app = express()

// parse application/json
app.use(bodyParser.json())
app.use(router);

const PORT = process.env.PORT || 8081

app.listen(PORT, function() {
   console.log(`PIB-Server started listening on ${PORT}!`)
})
