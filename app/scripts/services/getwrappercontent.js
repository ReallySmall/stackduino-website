'use strict';

/**
 * @ngdoc service
 * @name testApp.getPages
 * @description
 * # getPages
 * Service in the testApp.
 */
angular.module('stackduinoApp')
  .factory("getWrapperContent", function($http, getApiRoots) {

	var header = {
	    doRequest: function() {
	      	return $http({
	      		method:'GET',
	      		url: getApiRoots.drupal + "header",
	      		cache: true 
	      	});
	    }
	};

	var footer = {
	    doRequest: function() {
	    	console.log();
	      	return $http({
	      		method:'GET',
	      		url: getApiRoots.drupal + "footer",
	      		cache: true 
	      	});
	    }
	};

    return {
      requestHeader: function() { return header.doRequest(); },
      requestFooter: function() { return footer.doRequest(); }
    };

});
