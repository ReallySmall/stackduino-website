'use strict';

/**
 * @ngdoc service
 * @name stackduinoApp.getBoards
 * @description
 * # getBoards
 * Service in the stackduinoApp.
 */
angular.module('stackduinoApp')

.factory("getBoards", function($http, getApiRoots) {

	var boardList = {
	    doRequest: function() {
	      	return $http({
	      		method:'GET',
	      		url: getApiRoots.drupal + "boards",
	      		cache: true 
	      	})
	      	.success(function(data, status, headers, conf) {
        		return data;
      		});
	    }
	};

    return boardList.doRequest();

});
