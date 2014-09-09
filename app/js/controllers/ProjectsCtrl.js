define(['angular'], function(angular) {
  'use strict';

  var ProjectsCtrl = function($scope, $http) {
    $http.get('/api/projects')
      .success(function(data, status, headers, config) {
        $scope.projects = data;
        $scope.gallery = [];

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
