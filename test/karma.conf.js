module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'client/bower_components/angular/angular.js',
      'client/bower_components/angular-route/angular-route.js',
      'client/bower_components/angular-mocks/angular-mocks.js',
      'client/js/**/*.js',
      'client/**/*.js',
      'test/unit/client/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-html-reporter'
            ],
    
    reporters: ['progress', 'junit', 'html'],

    junitReporter : {
      outputFile: 'test/test_report/client/unit.xml',
      suite: 'unit'
    },

    // the default configuration
    htmlReporter: {
      outputDir: 'test/test_report/client',
      templatePath: __dirname+'/jasmine_template.html'
    }

  });
};
