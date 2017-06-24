const express = require('express')
const router = express.Router()

// Differents controllers
const boxLogs = require('./boxLogsAPI')

router.use('/box/logs', boxLogs)

module.exports = router

