requirejs.config({
  baseUrl: 'js',
  paths: {
    'jquery': '../components/jquery/dist/jquery',
    'angular': '../components/angular/angular',
    'angular-route': '../components/angular-route/angular-route',
    'angular-sanitize': '../components/angular-sanitize/angular-sanitize',
    'angular-touch': '../components/angular-touch/angular-touch',
    'angular-carousel': '../components/angular-carousel/dist/angular-carousel'
  },
  shim: {
    "angular": {
      deps: ['jquery'],
      exports: "angular"
    },
    'angular-route': {
      deps: ['angular']
    },
    'angular-sanitize': {
      deps: ['angular']
    },
    'angular-touch': {
      deps: ['angular']
    },
    'angular-carousel': {
      deps: ['angular', 'angular-touch']
    }
  }
});

require(['angular', 'App'], function(angular, App) {
  'use strict';

  // initialize angular template
  angular.bootstrap(document, ['myApp']);
});
