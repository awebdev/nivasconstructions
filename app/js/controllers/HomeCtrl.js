define(['angular'], function(angular) {
  'use strict';

  var HomeCtrl = function($scope, $http) {
    $http.get('api/projects', { cache: true})
      .success(function(data, status, headers, config) {
        $scope.carousels = data;
      })
      .error(function(data, status, headers, config) {
        console.log(status);
      });
  };

  return HomeCtrl;
});
