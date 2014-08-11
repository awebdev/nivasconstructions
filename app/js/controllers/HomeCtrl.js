define(['angular'], function(angular) {
  'use strict';

  var HomeCtrl = function($scope, $http) {
    $http.get('data/home.json')
      .success(function(data, status, headers, config) {
        $scope.images = data.images;
      })
      .error(function(data, status, headers, config) {
        console.log(status);
      });
  };

  return HomeCtrl;
});
