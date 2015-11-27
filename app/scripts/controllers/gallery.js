'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the testApp
 */
angular.module('stackduinoApp')
  .controller('GalleryCtrl', function ($timeout, $scope, getFlickrImages) {

  	$scope.images = [];
  	$scope.perPage = 10;
  	$scope.page = 1;
  	$scope.totalPages;
  	$scope.maxPages;
  	$scope.newItemCount;
  	$scope.loading = false;

  	//get flickr results by page
    $scope.getpagedResults = function(){
    	
    	$scope.loading = true;
    	
    	getFlickrImages.requestAll($scope.perPage, $scope.page)
	    .success(function(data, status, headers) {

	    	//store the total number of pages
			$scope.totalPages = data.photos.pages;
			//limit pages to smaller of total available pages, or 10
			$scope.maxPages = Math.min(10, $scope.totalPages);

			//store the number of new paged items
			$scope.newItemCount = data.photos.photo.length;			

			//push images to main scope array
			for(var i = 0; i < $scope.newItemCount; i++){
				$scope.images.push(data.photos.photo[i]);
			}

			$timeout(function(){
				$scope.loading = false;	
			}, 750);

	    });
	};

	//get the next page of results
	$scope.moreResults = function(){
		if($scope.page < $scope.maxPages){
			$scope.page++;
			$scope.getpagedResults();
		}
	};

	//get the first page of results
	$scope.getpagedResults();

  });