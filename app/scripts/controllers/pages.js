'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:PageCtrl
 * @description
 * # PageCtrl
 * Controller of the testApp
 */
angular.module('stackduinoApp')
  .controller('PageCtrl', function ($scope, $http, $location, getPages, getApiRoots) {
    
  		getPages.requestPage(11)
        .success(function(data, status, headers) {
          if(data.length){
	          $scope.pageContent = data[0];
	          $scope.title = $scope.pageContent.title[0].value;
	          $scope.summary = $scope.pageContent.body[0].summary; 
	          $scope.body = $scope.pageContent.body[0].value;
	          $scope.images = $scope.pageContent.field_image;
      	  }
        });

  });
