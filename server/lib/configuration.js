
var configurationData = {};

exports.init = function () {

  // HARDCODED DATA INITIALIZATION
  configurationData = {

    synopticsInformation: [
      {synopticName: 'Pyxsat', sensibleDataListsNames: ['pyxsat'], imagePath: ''},
      {synopticName: 'Observatory', sensibleDataListsNames: ['teslescopes', 'observatoryRoom'], imagePath: ''}
    ],
    sensibleDataListsInformation:[
      {sensibleDataListName: 'pyxsat',
      propertiesList: [{propertyName: 'fuelEng_1_%', propertyValue: '100'},
               {propertyName: 'fuelEng_2_%', propertyValue: '100'},
               {propertyName: 'emergency_power_generator_relay', propertyValue: '0'}]
      },
      {sensibleDataListName: 'telescopes',
      propertiesList: [{propertyName: 'tel_1_positon', propertyValue: 'Vega'},
               {propertyName: 'tel_2_positon', propertyValue: 'Orion'}],
      },
      {sensibleDataListName: 'observatoryRoom',
      propertiesList: [{propertyName: 'tel_1_power_supply_status', propertyValue: 'normal'},
               {propertyName: 'tel_2_power_supply_status', propertyValue: 'normal'}]
      }
    ],
    dynamicsInformation: [{dynamicName: "pyxsat", dynamicPath: "noPath"}]
  };
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
