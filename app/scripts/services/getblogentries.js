'use strict';

/**
 * @ngdoc service
 * @name testApp.getBlogEntries
 * @description
 * # getBlogEntries
 * Service in the testApp.
 */
angular.module('testApp')

.factory("getBlogEntries", function($http, getApiRoots) {

	var imageHref = getApiRoots.drupal + 'relation/node/board_version/field_images';

	var blogEntries = {
	    doRequest: function() {
	      	return $http({
	      		method:'GET',
	      		url: getApiRoots.drupal + "blog",
	      		cache: true 
	      	});
	    }
	};

    return {
      imageHref: imageHref,	
      requestAll: function() { return blogEntries.doRequest(); }
    };

});
