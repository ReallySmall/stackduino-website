'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:ToolsCtrl
 * @description
 * # ToolsCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('ToolsCtrl', function ($scope, $http, $location) {

    $scope.createPath = function(item){
    	item = item.replace(/ /g, '-').toLowerCase();
    	var url = $location.absUrl() + '/' + item;
    	return url;
  	}; 

  });
