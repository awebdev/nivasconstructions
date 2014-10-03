define(['angular', 'services/Utils'],
 function(angular, Utils) {
  'use strict';

  var RouteHandler = function RouteHandler($routeProvider, $locationProvider) {
    var templateDir = 'js/html/';

    // configure html5 to get links working on jsfiddle
    $locationProvider.hashPrefix('!');

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
      .when('/projects/ongoing', {
        templateUrl: templateDir + 'projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projectsCtrl'
      })
      .when('/projects/completed', {
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
  };

  return RouteHandler;
});

