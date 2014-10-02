define(['angular'], function(angular) {
  'use strict';

  var HomeCtrl = function($scope, $http) {
    $http.get('api/projects', { cache: true})
      .success(function(data, status, headers, config) {
        $scope.carousels = data;
      })
      .error(function(data, status, headers, config) {
        $http.post('/log', {ctrl: 'HomeCtrl', data: data, status: status});
        window.location.href = "/SNA.html";
      });
  };

  return HomeCtrl;
});
