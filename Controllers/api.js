const express = require('express')
const router = express.Router()

// Differents controllers
const boxLogs = require('./boxLogsAPI')
const boxInfos = require('./boxInfosAPI')

router.use('/box/logs', boxLogs)
router.use('/box/infos', boxInfos)

module.exports = router

