const express = require('express')
const router = express.Router();

const boxLogs = require('./BoxLogs')

router.get('/test', function (req, res) {
    const response = {message: boxLogs.getWelcome()}
    res.json(response)
});

router.get('/', function (req, res) {
    boxLogs.getLogs()
      .then(logs => {
        res.json(logs)
      })
      .catch(err => {
        res.send("Error: " + err)
      })
});

router.post('/', function(req, res){
    const {log} = req.body

    boxLogs.addLog(log).then(item => {
      res.end()
    }).catch(err => {
      res.send("Error: " + err)
    })
    
})


module.exports = router