/**
 * Launcher File.  Used to setup RequireJS and Start unit testing with Karma
 */

// create an array of spec files for require config dependency below
var tests = [];

for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/Spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

require.config({
    baseUrl: 'base/src/js',
    paths: {
        html: '../html',
        lib: '../lib',
        jquery: '../lib/jquery/jquery-2.0.3',
        underscore: '../lib/underscore/underscore-1.5.2',
        backbone: '../lib/backbone/backbone-1.1.0',
        text: '../lib/require/text',
        domReady: '../lib/require/domReady',
        bootstrap: '../lib/bootstrap/bootstrap-3.0.3/js/bootstrap',
        normalize: '../lib/require/normalize',
        css: '../lib/require/css'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery']
        }
    },

    priority: [],
    // locale: 'en-us',
    urlArgs: 'bust=' + (new Date()).getTime(),

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start,
});