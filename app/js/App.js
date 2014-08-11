define(['angular', 'controllers/HeaderCtrl', 'controllers/HomeCtrl', 'controllers/RouteHandler',
          'controllers/ProjectsCtrl', 'controllers/AboutCtrl', 'controllers/ContactCtrl',
          'services/Utils', 'angular-route', 'angular-touch', 'angular-carousel', 'angular-google-maps'],
 function(angular, HeaderCtrl, HomeCtrl, RouteHandler,
          ProjectsCtrl, AboutCtrl, ContactCtrl,
            Utils) {
  'use strict';

  var App = angular.module('myApp', ['ngRoute', 'ngTouch', 'angular-carousel', 'google-maps'])
                  .controller('HeaderCtrl', HeaderCtrl)
                  .controller('HomeCtrl', HomeCtrl)
                  .controller('ProjectsCtrl', ProjectsCtrl)
                  .controller('AboutCtrl', AboutCtrl)
                  .controller('ContactCtrl', ContactCtrl)
                  .service('Utils', Utils)
                  .config(['$routeProvider', '$locationProvider', RouteHandler]);

  return App;
});
