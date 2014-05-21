'use strict';

var serverPath = '../../../../server';
var configuration = require(serverPath + '/lib/configuration');


var configurationData = {

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

/* jasmine specs for configuration go here */

describe('Configuration library test: setting/getting synoptics information.', function() {
  

	function matchesSynopticsInfo(synopticsInfo){

		if (!((synopticsInfo.length) == (configurationData.synopticsInformation.length)))
			return false;

		function equalsArrayOfStrings(array1, array2){
			if (!(array1.length == array2.length))
				return false;
			for (var i=0; i<array1.length; i++){
				if (!(array1[i] == array2[i]))
					return false;
			}
			return true;
		};

		for (var i=0; i<synopticsInfo.length; i++){
			if (!((synopticsInfo[i].synopticName == configurationData.synopticsInformation[i].synopticName) &&
				  (synopticsInfo[i].imagePath == configurationData.synopticsInformation[i].imagePath) &&
				  (equalsArrayOfStrings(synopticsInfo[i].sensibleDataListsNames, configurationData.synopticsInformation[i].sensibleDataListsNames))))
				return false;
		}
		return true;
	};
	
	//Setting synoptics information
	configuration.setSynopticsInformation(configurationData.synopticsInformation);

  	it('After setting synoptics info, getting sytnoptics should match with the setted information', function() {
	  expect(matchesSynopticsInfo(configuration.getSynopticsInformation())).toBe(true);
	})
});

describe('Configuration library test: setting/getting sensible data lists information', function() {
  
	function matchesSensibleDataListsInfo(sensibleDataListsInfo){

		function equalsArrayOfProperties(arrayProp1, arrayProp2){
			if (!(arrayProp1.length == arrayProp2.length))
				return false;
			for (var i=0; i<arrayProp1.length; i++){
				if (!((arrayProp1[i].propertyName == arrayProp2[i].propertyName) && (arrayProp1[i].propertyValue == array2Prop[i].propertyValue)))
					return false;
			}
			return true;
		};


		if (!((sensibleDataListsInfo.length) == (configurationData.sensibleDataListsInformation.length)))
			return false;

		for (var i=0; i<sensibleDataListsInfo.length; i++){
			if (!(sensibleDataListsInfo[i].sensibleDataListName == configurationData.sensibleDataListsInformation[i].sensibleDataListName) &&
				 (equalsArrayOfProperties(sensibleDataListsInfo[i].propertiesList, configurationData.sensibleDataListsInformation[i].propertiesList)))
				return false;
		}
		return true;
	};

  	//Setting sensible data lists information information
	configuration.setSensibleDataListsInformation(configurationData.sensibleDataListsInformation);

  	it('After setting sensible data lists info, getting sensible data lists should match with the setted information', function() {
	  expect(matchesSensibleDataListsInfo(configuration.getSensibleDataListsInformation())).toBe(true);
	})
});

describe('Configuration library test: setting/getting dynamics information', function() {

	function matchesDynamicsInfo(dynamicsInfo){

		if (!((dynamicsInfo.length) == (configurationData.dynamicsInformation.length)))
			return false;

		for (var i=0; i<dynamicsInfo.length; i++){
			if (!((dynamicsInfo[i].dynamicName == configurationData.dynamicsInformation[i].dynamicName) &&
				 (dynamicsInfo[i].dynamicPath, configurationData.dynamicsInformation[i].dynamicPath)))
				return false;
		}
		return true;
	};

	//Setting dynamics information information
	configuration.setDynamicsInformation(configurationData.dynamicsInformation);

	it('After setting dynamics information, getting dynamicsshould match with the setted information', function() {
	  expect(matchesDynamicsInfo(configuration.getDynamicsInformation())).toBe(true);
	})
});
