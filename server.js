// set up ======================================================================
var express  = require('express');
var app      = express(); 								// create app w/ express
var port  	 = process.env.PORT || 8080; 				// set the port
var configuration = require('./server/lib/configuration');

// configuration ===============================================================

app.configure(function() {
	app.use(express.static(__dirname + '/client')); 		// set the static files location /public/img will be /img for users
	app.use(express.logger('dev')); 						// log every request to the console
	app.use(express.bodyParser()); 							// pull information from html in POST
	app.use(express.methodOverride()); 						// simulate DELETE and PUT
});

// routes ======================================================================
require('./server/routes.js')(app);

// init app data
configuration.init();

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);

if (process.platform !== 'win32') {
  //
  // Signal handlers don't work on Windows.
  //
  process.on('SIGINT', function () {
    console.log('http-server stopped.');
    process.exit();
  });
}