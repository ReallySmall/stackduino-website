'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the testApp
 */
angular.module('stackduinoApp')
  .controller('GalleryCtrl', function ($scope, getFlickrImages) {

    getFlickrImages.requestAll()
	    .success(function(data, status, headers) {
	      $scope.images = data.photos.photo;	      
	    });

  });