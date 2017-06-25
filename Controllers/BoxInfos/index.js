const model = require('../../DatabaseAccess').getModel()

const collectionName = "box-infos"

function getWelcome(){
  return 'Welcome to box infos!'
}

function getBoxsInfo(){
    return model.getCompleteCollection(collectionName);
}

function addBoxInfo(log){
  return model.create(collectionName, log);
}

module.exports = {
  getWelcome,
  getBoxsInfo,
  addBoxInfo
}