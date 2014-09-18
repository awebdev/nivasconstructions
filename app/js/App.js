define(['angular', 'controllers/HeaderCtrl', 'controllers/HomeCtrl', 'controllers/RouteHandler',
          'controllers/ProjectsCtrl', 'controllers/AboutCtrl', 'controllers/ContactCtrl',
          'services/Utils',
          'angular-sanitize', 'angular-route', 'angular-touch', 'angular-bootstrap', 'angular-google-maps'],
 function(angular, HeaderCtrl, HomeCtrl, RouteHandler,
          ProjectsCtrl, AboutCtrl, ContactCtrl,
          Utils) {
  'use strict';

  var App = angular.module('myApp', ['ngRoute', 'ngTouch', 'ui.bootstrap', 'google-maps', 'ngSanitize'])
                  .controller('HeaderCtrl', ['$scope', '$http', '$location', '$rootScope', HeaderCtrl])
                  .controller('HomeCtrl', ['$scope', '$http', HomeCtrl])
                  .controller('ProjectsCtrl', ['$scope', '$http', '$location', '$rootScope', ProjectsCtrl])
                  .controller('AboutCtrl', ['$scope', '$http', AboutCtrl])
                  .controller('ContactCtrl', ['$scope', '$http', ContactCtrl])
                  .service('Utils', Utils)
                  .config(['$routeProvider', '$locationProvider', RouteHandler]);

  return App;
});
