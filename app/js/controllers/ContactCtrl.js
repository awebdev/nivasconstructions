define(['angular'], function(angular) {
  'use strict';

  var ContactCtrl = function($scope, $http) {
    $http.get('data/contact.json', { cache: true})
      .success(function(data, status, headers, config) {
        $scope.individuals = data.individuals;
        $scope.company = data.company;
      })
      .error(function(data, status, headers, config) {
        $http.post('/log', {ctrl: 'ContactCtrl', data: data, status: status});
        window.location.href = "/SNA.html";
      });


    $scope.map = {center: {latitude: 17.367596, longitude: 78.530981 }, zoom: 18 };
    $scope.marker = {
        id:0,
        title: "Nivas Constructions",
        coords: {
            latitude: $scope.map.center.latitude,
            longitude: $scope.map.center.longitude
        },
        options: { draggable: false },
        events: {
            dragend: function (marker, eventName, args) {
            }
        }
    };
  };

  return ContactCtrl;
});
