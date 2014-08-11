define(['angular', 'services/Utils'],
 function(angular, Utils) {
  'use strict';

  var RouteHandler = function RouteHandler($routeProvider, $locationProvider) {
    var templateDir = 'js/html/';
    $routeProvider
      .when('/', {
        templateUrl: templateDir + 'home.html',
        controller: 'HomeCtrl',
        controllerAs: 'homeCtrl'
      })
      .when('/about', {
        templateUrl: templateDir + 'about.html',
        controller: 'AboutCtrl',
        controllerAs: 'aboutCtrl'
      })
      .when('/projects', {
        templateUrl: templateDir + 'projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projectsCtrl'
      })
      .when('/contact', {
        templateUrl: templateDir + 'contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    // configure html5 to get links working on jsfiddle
    // $locationProvider.html5Mode(true);
  };

  return RouteHandler;
});

