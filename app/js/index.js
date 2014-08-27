requirejs.config({
  baseUrl: 'js',
  paths: {
    'jquery': '../components/jquery/dist/jquery',
    'angular': '../components/angular/angular',
    'angular-route': '../components/angular-route/angular-route',
    'angular-sanitize': '../components/angular-sanitize/angular-sanitize',
    'angular-touch': '../components/angular-touch/angular-touch',
    'angular-bootstrap': '../components/angular-bootstrap/ui-bootstrap-tpls.min',
    'lodash': '../components/lodash/dist/lodash.min',
    'angular-google-maps': '../components/angular-google-maps/dist/angular-google-maps'
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
    'angular-bootstrap': {
      deps: ['angular', 'angular-touch']
    },
    'angular-google-maps': {
      deps: ['angular', 'lodash']
    }
  }
});

require(['angular', 'App'], function(angular, App) {
  'use strict';

  // initialize angular template
  angular.bootstrap(document, ['myApp']);
});
