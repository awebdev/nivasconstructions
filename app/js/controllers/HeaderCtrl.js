define(['angular'], function(angular) {
  'use strict';

  var HeaderCtrl = function($scope, $http) {
     $http.get('/app/data/header.json')
      .success(function(data, status, headers, config) {
        $scope.links = data.links;
      })
      .error(function(data, status, headers, config) {
        console.log(status);
      });
  };

  return HeaderCtrl;
});
