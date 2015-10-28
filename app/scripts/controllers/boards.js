'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('BoardsCtrl', function ($scope, $http, $location, getBoards) {

  $scope.imageLink = getBoards.imageHref;

	getBoards.requestAll()
    .success(function(data, status, headers) {
      $scope.boards = data;
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
