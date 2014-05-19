var configuration = require('./lib/configuration');

module.exports = function(app) {

	// API---------------------------------------------------------------------
	// get synoptics information
	app.get('/service/synopticsData', function(req, res) {

		var synopticsInfo = configuration.getSynopticsInformation();
		res.json(synopticsInfo);
		
	});

	// get sensible data lists information
	app.get('/service/sensibleListsData', function(req, res) {

		var sensibleDataListsInfo = configuration.getSensibleDataListsInformation();
		res.json(sensibleDataListsInfo);
		
	});

	// get sensible data lists information
	app.get('/service/dynamicsData', function(req, res) {

		var dynamicsInfo = configuration.getDynamicsInformation();
		res.json(dynamicsInfo);
		
	});

	// application -------------------------------------------------------------
	app.get('/', function(req, res) {
		res.sendfile('./client/index.html'); // load the single view file
											 // (angular will handle the page changes on the front-end)
	});
	// application -------------------------------------------------------------
	app.get('/index.html', function(req, res) {
		res.sendfile('./client/index.html'); // load the single view file
											 // (angular will handle the page changes on the front-end)
	});
	app.get('/async', function(req, res) {
		res.sendfile('./client/index-async.html'); // load the single view file
											 // (angular will handle the page changes on the front-end)
	});
};