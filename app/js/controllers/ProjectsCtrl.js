define(['angular'], function(angular) {
  'use strict';

  var ProjectsCtrl = function($scope, $http) {
    $http.get('data/projects.json')
      .success(function(data, status, headers, config) {
        $scope.active = data.active;
        $scope.archive = data.archive;
      })
      .error(function(data, status, headers, config) {
        console.log(status);
      });
  };

  return ProjectsCtrl;
});
