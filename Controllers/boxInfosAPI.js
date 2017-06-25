const express = require('express')
const router = express.Router();

const boxInfos = require('./BoxInfos')

router.get('/test', function (req, res) {
    const response = {message: boxLogs.getWelcome()}
    res.json(response)
});

router.get('/', function (req, res) {
    boxInfos.getBoxsInfo()
      .then(logs => {
        res.json(logs)
      })
      .catch(err => {
        res.send("Error: " + err)
      })
});

router.post('/', function(req, res){
    const {log} = req.body

    boxInfos.addBoxInfo(log).then(item => {
      res.end()
    }).catch(err => {
      res.send("Error: " + err)
    })
    
})


module.exports = router