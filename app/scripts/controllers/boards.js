'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('BoardsCtrl', function ($scope, $http, $location, getBoards, getFlickrImages) {

  $scope.imageLink = getBoards.imageHref;

	getBoards.requestAll()
    .success(function(data, status, headers) {
      $scope.boards = data;

      getFlickrImages.requestSiteImages()
      .success(function(data, status, headers) {

        //get matching image urls for each board
        for(var i = 0; i < $scope.boards.length; i++){
          
          var $this = $scope.boards[i];
          var boardVersion = 'v' + $this.field_board_machine_id[0].value.replace(/\./g,'');
          var rawResults = data.photoset.photo;          
            
          //get the urls of images with tags matching this board version
          $this.images = getFlickrImages.cachedTag(boardVersion) || getFlickrImages.filterByTag(rawResults, boardVersion);
          console.log($this.images);

        }

      });

    });

    $scope.createPath = function(item){
    	item = item.replace(/ /g, '-').toLowerCase();
    	var url = $location.absUrl() + '/' + item;
    	return url;
  	}; 

  	$scope.display = {
  		formats: {
  			grid: true
  		},
  		sort: {
  			order: true
  		}
  	};

  });
