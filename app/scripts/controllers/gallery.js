'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('GalleryCtrl', function ($scope, getFlickrImages) {

    getFlickrImages.requestAll()
	    .success(function(data, status, headers) {
	      $scope.images = data.photos.photo;
	      console.log($scope.images);
	    });

	getFlickrImages.requestSiteImages()
	    .success(function(data, status, headers) {
	      $scope.siteImages = data.photoset.photo;
	    });

  });
