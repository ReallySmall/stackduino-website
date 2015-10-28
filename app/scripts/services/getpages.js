'use strict';

/**
 * @ngdoc service
 * @name testApp.getPages
 * @description
 * # getPages
 * Service in the testApp.
 */
angular.module('testApp')
  .factory("getPages", function($http, getApiRoots) {

	var pageList = {
	    doRequest: function() {
	      	return $http({
	      		method:'GET',
	      		url: getApiRoots.drupal + "pages",
	      		cache: true 
	      	});
	    }
	};
    return {
      requestAll: function() { return pageList.doRequest(); }
    };

});
