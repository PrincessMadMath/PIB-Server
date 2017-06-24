'use strict'

const express = require('express')


const app = express()


const router = require('./Controllers')

app.use(router);

const PORT = process.env.PORT || 8081

app.listen(PORT, function() {
   console.log(`PIB-Server started listening on ${PORT}!`)
})
