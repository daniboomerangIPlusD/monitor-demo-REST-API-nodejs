'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('SynopticDemo.services', []).
  value('version', '3.0.0');