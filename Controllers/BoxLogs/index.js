const model = require('../../DatabaseAccess').getModel()

const collectionName = "box-logs"

function getWelcome(){
  return 'Welcome to box logs!'
}

function getLogs(){
    return model.getCompleteCollection(collectionName);
}

function addLog(log){
  return model.create(collectionName, log);
}

module.exports = {
  getWelcome,
  getLogs,
  addLog
}