define(['angular'], function(angular) {
  'use strict';

  var ProjectsCtrl = function($scope, $http) {
    $http.get('data/projects.json')
      .success(function(data, status, headers, config) {
        $scope.gallery = [];
        $scope.activeProjects = data.activeProjects;
        $scope.archive = data.archive;

        $scope.setGallery = function setGallery(gallery) {
          $scope.gallery = gallery;
        };

      })
      .error(function(data, status, headers, config) {
        console.log(status);
      });
  };

  return ProjectsCtrl;
});
