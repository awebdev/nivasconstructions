requirejs.config({
  baseUrl: 'js',
  paths: {
    'jquery': '../components/jquery/dist/jquery',
    'angular': '../components/angular/angular',
    'angular-route': '../components/angular-route/angular-route.min',
    'angular-sanitize': '../components/angular-sanitize/angular-sanitize',
    'domReady': '../components/requirejs-domready/domReady'
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
