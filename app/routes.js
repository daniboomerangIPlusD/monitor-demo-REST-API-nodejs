var configuration = require('./models/configuration');
var satellite = require('./models/satellite');

module.exports = function(app) {

	// API---------------------------------------------------------------------
	// get synoptics information
	app.get('/service/getSynopticsData', function(req, res) {

		var dynamicsInfo = "testing node web services for dynamicsInfo";
		res.json(dynamicsInfo);
		
	});
	// application -------------------------------------------------------------
	app.get('/', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file
											 // (angular will handle the page changes on the front-end)
	});
	// application -------------------------------------------------------------
	app.get('/index.html', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file
											 // (angular will handle the page changes on the front-end)
	});
	app.get('/async', function(req, res) {
		res.sendfile('./public/index-async.html'); // load the single view file
											 // (angular will handle the page changes on the front-end)
	});
};