'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('BlogCtrl', function ($scope, $http, $location, getBlogEntries, utils) {

  $scope.blogTags = [];

	getBlogEntries.requestAll()
        .success(function(data, status, headers) {
          $scope.blogEntries = data;

          console.log($scope.blogEntries);
        });

    $scope.createPath = function(url){
    	url = url.replace(/ /g, '-').toLowerCase();
    	var cleanUrl = $location.absUrl() + '/' + url;
    	return cleanUrl;
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
