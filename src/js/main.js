// RequireJS configuration
require.config({
	paths: {
		html: '../html',
		lib: '../lib',
		jquery: '../lib/jquery/jquery-1.10.2',
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
		},

		'html/compiled': {
			deps: ['core']
		}
	}
});

// Define jQuery as AMD module
define.amd.jQuery = true;

// Setup global namespacing
window.mv = { //instanciate namespace for application
	views: {},
	models: {},
	collections: {},
	i: { //for instaciated objects
		views: {},
		router: null
	},
	sections: {
		mainContainer: '#main-container'
	}
};

// bootstrap the application
require([
	'core',
	'router',
	'html/compiled'
], function (core, Router) {

	mv.i.router = new Router();
	Backbone.history.start();

});
