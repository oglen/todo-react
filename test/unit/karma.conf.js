/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

module.exports = function (config) {
    'use strict';

    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../../',
        // frameworks to use
        frameworks: ['jasmine', 'requirejs'],
        // list of files / patterns to load in the browser
        files: [
            {pattern: 'test/unit/app/init.js', included: true},
            {pattern: 'lib/**/*.js', included: false},
            {pattern: 'app/**/*', included: false},
            {pattern: 'test/unit/**/*', included: false}
        ],
        // generate js files from html templates
        preprocessors: {
            'app/templates/*.html': 'ng-html2js',
            'app/**/*.js': ['coverage']
        },
        // coverage reporter
        coverageReporter: {
            type: 'html',
            dir: 'reports/coverage/'
        },
        // list of files to exclude
        exclude: [
            '../app/init.js',
            '../lib/**/*.min.js',
            '../lib/**/test/*.*',
            '../lib/**/*Spec.js'
        ],
        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress'],
        // web server port
        port: 9876,
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['Chrome', 'Firefox'],
        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,
        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
