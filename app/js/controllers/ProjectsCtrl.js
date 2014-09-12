define(['angular'], function(angular) {
  'use strict';

  var ProjectsCtrl = function($scope, $http, $location) {
    $http.get('/api/projects', { cache: true})
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

    $scope.type = function () {
      var location = $location.path().split('/');
      var type = location[location.length - 1];
      return type;
    };
  };

  return ProjectsCtrl;
});
