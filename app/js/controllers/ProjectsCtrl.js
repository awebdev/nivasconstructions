define(['angular'], function(angular) {
  'use strict';

  var ProjectsCtrl = function($scope, $http, $location, $rootScope) {
    $http.get('/api/projects', { cache: true})
      .success(function(data, status, headers, config) {
        $scope.projects = data;
        $scope.gallery = [];
      })
      .error(function(data, status, headers, config) {
        $http.post('/log', {ctrl: 'ProjectsCtrl', data: data, status: status});
        window.location.href = "/SNA.html";
      });

    $scope.setGallery = function setGallery(gallery) {
      $rootScope.galleryCarousel = gallery;
    };

    $scope.setSpecs = function setSpecs(title, specs) {
      $rootScope.projectTitle = title;
      $rootScope.projectSpecs = specs;
    };

    $scope.type = function () {
      var location = $location.path().split('/');
      var type = location[location.length - 1];
      return type;
    };
  };

  return ProjectsCtrl;
});
