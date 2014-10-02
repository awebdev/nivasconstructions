define(['angular'], function(angular) {
  'use strict';

  var HeaderCtrl = function($scope, $http, $location, $rootScope) {
    $scope.isCollapsed = true;

    $http.get('api/menu')
      .success(function(data, status, headers, config) {
        $scope.links = data;
      })
      .error(function(data, status, headers, config) {
        $http.post('/log', {ctrl: 'HeaderCtrl', data: data, status: status});
        window.location.href = "/SNA.html";
      });

    $scope.collapseNavBar = function collapseNavBar() {
      $scope.isCollapsed = true;
    };

    $scope.isActive = function isActive(path) {
      var route = '#' + $location.path();

      if(angular.isArray(path)) {
        var isActive = false;
        angular.forEach(path, function(value, key) {
          if(value.url == route){
            isActive = true;
            return;
          }
        });
        return isActive;
      } else {
        return path == route;
      }
    };

    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      ga('send', {
        'hitType': 'event',          // Required.
        'eventCategory': 'navigation',   // Required.
        'eventAction': 'click',      // Required.
        'eventLabel': next.$$route.originalPath
      });
      ga('send', 'pageview', {
        'page': next.$$route.originalPath,
        'title': next.$$route.controller
      });
    });

    $rootScope.isArray = angular.isArray;
    $rootScope.isNumber = angular.isNumber;
    $rootScope.isString = angular.isString;

  };

  return HeaderCtrl;
});
