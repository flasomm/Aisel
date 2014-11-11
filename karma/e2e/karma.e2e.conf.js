// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '../../',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['ng-scenario', 'jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'web/bower_components/domReady/domReady',
            'web/bower_components/angular/angular',
            'web/bower_components/sass-bootstrap/dist/js/bootstrap',
            'web/bower_components/angular-resource/angular-resource',
            'web/bower_components/textAngular/dist/textAngular-sanitize.min',
            'web/bower_components/textAngular/dist/textAngular.min',
            'web/bower_components/angular-cookies/angular-cookies.min',
            'web/bower_components/angular-sanitize/angular-sanitize',
            'web/bower_components/angular-route/angular-route',
            'web/bower_components/angular-bootstrap/ui-bootstrap-tpls',
            'web/bower_components/angular-ui-utils/ui-utils',
            'web/bower_components/angular-notify/dist/angular-notify.min',
            'web/bower_components/angular-gravatar/build/md5',
            'web/bower_components/angular-gravatar/build/angular-gravatar',
            'web/bower_components/angular-disqus/src/angular-disqus',

            'node_modules/ng-midway-tester/src/ngMidwayTester.js',

            'web/app/*.js',
            'web/app/**/*.js',
            'web/app/**/**/*.js',
            'web/app/**/**/**/*.js',
            'web/app/**/**/**/**/*.js',
            'karma/e2e/**/*.js'

        ],

        reporters: 'dots',

        // web server host
        hostname: 'ecommerce.aisel.dev',

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 80,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Which plugins to enable
        plugins: [
            'karma-jasmine',
            'karma-ng-scenario',
            'karma-firefox-launcher',
        ],

        preprocessors: {
            'views/**/*.html': 'html2js'
        },

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Firefox'],

        proxies: {
            '/': 'http://ecommerce.aisel.dev/en/'
        },

        urlRoot: '_karma_',

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true,

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,
        // URL root prevent conflicts with the site root

        jasmineNodeOpts: {
            defaultTimeoutInterval: 30000
        }
    });
};
