define(['angular'], function(angular) {
  'use strict';

  var HomeCtrl = function($scope, $http) {
    this.content = "HOME!!";
    this.images = [
              "images/carousel/vijayKrishna.png",
              "images/carousel/padmanayaka.png",
              "images/carousel/kalyaniResidency.png",
              "images/carousel/saradaSadan.png"
    ];
  };

  return HomeCtrl;
});
