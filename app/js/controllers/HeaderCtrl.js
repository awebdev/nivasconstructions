define(['angular'], function(angular) {
  'use strict';

  var HeaderCtrl = function($scope, $http, $location, $rootScope) {
    $scope.isCollapsed = true;

    $http.get('api/menu')
      .success(function(data, status, headers, config) {
        $scope.links = data;
      })
      .error(function(data, status, headers, config) {
        console.log(status);
      });

    $scope.collapseNavBar = function() {
      $scope.isCollapsed = true;
      console.log($scope);
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

  };

  return HeaderCtrl;
});
