define(['angular'], function(angular) {
  'use strict';

  var HeaderCtrl = function($scope, $http, $location) {
    $http.get('data/header.json')
      .success(function(data, status, headers, config) {
        $scope.links = data.links;
      })
      .error(function(data, status, headers, config) {
        console.log(status);
      });

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  };

  return HeaderCtrl;
});
