'use strict';

/**
 * @ngdoc service
 * @name testApp.getApiRoots
 * @description
 * # getApiRoots
 * Service in the testApp.
 */
angular.module('stackduinoApp')
  .factory("getApiRoots", function() {

	var roots = {
    drupal: "/api/content/",
    flickr: "/api/flickr/",
    gitHub: "https://api.github.com/repos/reallysmall/"
	};

  return {
    drupal: roots.drupal,
    gitHub: roots.gitHub,
    flickr: roots.flickr,
  };

});
