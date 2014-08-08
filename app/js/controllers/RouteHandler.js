define(['angular', 'services/Utils'],
 function(angular, Utils) {
  'use strict';

  var RouteHandler = function RouteHandler($routeProvider, $locationProvider) {
                      var templateDir = 'js/html/';
                      $routeProvider
                        .when('/home', {
                          templateUrl: templateDir + 'home.html',
                          controller: 'HomeCtrl',
                          controllerAs: 'this'
                        })
                        .when('/profile', {
                          templateUrl: templateDir + 'profile.html',
                          controller: 'ProfileCtrl',
                          controllerAs: 'this'
                        })
                        .otherwise({
                          redirectTo: '/home'
                        });

                      // configure html5 to get links working on jsfiddle
                      // $locationProvider.html5Mode(true);
                  };

  return RouteHandler;
});

