const express = require('express')
const router = express.Router()

// Different controllers
const api = require('./api')

router.use('/api', api)


router.get('/', function(req, res){
    res.send('PIB-API')
})

module.exports = router
