var componentsUrl = '../components/';
requirejs.config({
  baseUrl: 'js',
  paths: {
    'jquery': componentsUrl + 'jquery/dist/jquery',
    'angular': componentsUrl + 'angular/angular',
    'angular-route': componentsUrl + 'angular-route/angular-route.min',
    'angular-sanitize': componentsUrl + 'angular-sanitize/angular-sanitize',
    'domReady': componentsUrl + 'requirejs-domready/domReady'
  },
  shim: {
    "angular": {
      deps: ['jquery'],
      exports: "angular"
    },
    'angular-route': {
      deps: ['angular'],
      exports: "ngRoute"
    },
    'angular-sanitize': {
      deps: ['angular'],
      exports: "ngSanitize"
    }
  }
});

require(['angular', 'App'], function(angular, App) {
  'use strict';

  // initialize angular template
  angular.bootstrap(document, ['myApp']);
});
