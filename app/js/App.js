define(['angular', 'controllers/HeaderCtrl', 'controllers/HomeCtrl', 'controllers/RouteHandler',
          'controllers/ProjectsCtrl', 'controllers/AboutCtrl', 'controllers/ContactCtrl',
          'services/Utils',
          'angular-sanitize', 'angular-route', 'angular-touch', 'angular-bootstrap', 'angular-google-maps'],
 function(angular, HeaderCtrl, HomeCtrl, RouteHandler,
          ProjectsCtrl, AboutCtrl, ContactCtrl,
          Utils) {
  'use strict';

  var App = angular.module('myApp', ['ngRoute', 'ngTouch', 'ui.bootstrap', 'google-maps', 'ngSanitize'])
                  .controller('HeaderCtrl', HeaderCtrl)
                  .controller('HomeCtrl', HomeCtrl)
                  .controller('ProjectsCtrl', ProjectsCtrl)
                  .controller('AboutCtrl', AboutCtrl)
                  .controller('ContactCtrl', ContactCtrl)
                  .service('Utils', Utils)
                  .config(['$routeProvider', '$locationProvider', RouteHandler]);

  return App;
});
