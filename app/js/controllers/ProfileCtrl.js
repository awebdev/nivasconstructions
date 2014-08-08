define(['angular'], function(angular) {
  'use strict';

  var ProfileCtrl = function($scope, $http) {
    this.pageTitle = "PROFILE";
    this.descriptions = [];
    this.descriptions.push("The beautiful landmarks that carry the Nivas stamp of class are the culmination of a struggle that began many years ago in humble surroundings. Nivas Constructions nurture a vision to create wonderful buildings for people to live in and appreciate. The numerous residential and commercial buildings in and around Hyderabad, particularly in the beautiful locality of Dilsukhnagar are testimony to the fact that there is a construction firm with a heart of gold, an architect with a vision and a determination to excel.");
    this.descriptions.push("Nivas Constructions Pvt. Ltd. is a professional company run by dynamic professionals with ample experience in construction, particularly in maintaining high quality standards. It is indeed a pleasure to the eyes to see the highest aesthetics and smart touches prevailing in every aspect of a Nivas building. These are the advantages that make Nivas Constructions the super builders in Hyderabad.");
    this.descriptions.push("The past is the biggest indicator of our future. Our satisfied customers are our biggest references, even as our ongoing projects get booked very quickly after we announce them. Nivas Constructions are grateful to their customers who have encouraged us to attempt bigger and more ambitious projects. We are confident that our determination to provide the highest quality standards in each and every one of our projects will provide the momentum to excellence.");
  };

  return ProfileCtrl;
});
