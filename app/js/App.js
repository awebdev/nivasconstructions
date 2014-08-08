define(['angular', 'controllers/HeaderCtrl', 'controllers/HomeCtrl', 'controllers/RouteHandler',
          'controllers/ProfileCtrl',
          'services/Utils', 'angular-sanitize', 'angular-route'],
 function(angular, HeaderCtrl, HomeCtrl, RouteHandler,
          ProfileCtrl,
            Utils) {
  'use strict';

  var App = angular.module('myApp', ['ngSanitize', 'ngRoute'])
                  .controller('HeaderCtrl', HeaderCtrl)
                  .controller('HomeCtrl', HomeCtrl)
                  .controller('ProfileCtrl', ProfileCtrl)
                  .service('Utils', Utils)
                  .config(['$routeProvider', '$locationProvider', RouteHandler]);

  return App;
});
