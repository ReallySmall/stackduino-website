'use strict';

/**
 * @ngdoc service
 * @name testApp.getBoards
 * @description
 * # getBoards
 * Service in the testApp.
 */
angular.module('stackduinoApp')

.factory("getBoards", function($http, getApiRoots) {

	var boardList = {
	    doRequest: function() {
	      	return $http({
	      		method:'GET',
	      		url: getApiRoots.drupal + "boards",
	      		cache: true 
	      	});
	    }
	};

    return {
      requestAll: function() { return boardList.doRequest(); }
    };

});
