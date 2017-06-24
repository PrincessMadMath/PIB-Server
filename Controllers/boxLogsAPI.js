const express = require('express')
const router = express.Router();

const boxLogsMethod = require('./BoxLogs')

router.get('/', function (req, res) {
    const response = {message: boxLogsMethod.getWelcome()}
    res.json(response)
});

module.exports = router