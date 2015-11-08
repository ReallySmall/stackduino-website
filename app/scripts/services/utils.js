'use strict';

/**
 * @ngdoc service
 * @name testApp.utils
 * @description
 * # utils
 * Service in the testApp.
 */
angular.module('stackduinoApp')

.factory("utils", function($http, $location) {

	var alterData = {
	    getUniqueRecord: function() {
	      	
	    }
	};

	var alterString = {
		cleanUrl: function(url) {
			url = url.replace(/ /g, '-').toLowerCase();
    		var cleanUrl = $location.absUrl() + '/' + url;
    		return cleanUrl;
		}
	};

    return {
      getUniqueRecord: function() { return alterData.getUniqueRecord(); },	
      cleanUrl: function() { return alterString.cleanUrl(url); }
    };

});
