
var configurationData = {

  synopticsInformation: [],
  sensibleDataListsInformation:[],
  dynamicsInformation: {}

};


exports.setSynopticsInformation = function (synopticsInformation) {
  return configurationData.synopticsInformation = synopticsInformation;
};

exports.setDynamicsInformation = function (dynamicsInformation) {
  return configurationData.dynamicsInformation = dynamicsInformation;
};

exports.setSensibleDataListsInformation = function (sensibleDataListsInformation) {
  return configurationData.sensibleDataListsInformation = sensibleDataListsInformation;
};

exports.getSynopticsInformation = function () {
  return configurationData.synopticsInformation;
};

exports.getDynamicsInformation = function () {
  return configurationData.dynamicsInformation;
};

exports.getSensibleDataListsInformation = function () {
  return configurationData.sensibleDataListsInformation;
};