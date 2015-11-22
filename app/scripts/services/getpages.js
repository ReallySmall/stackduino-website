'use strict';

/**
 * @ngdoc service
 * @name testApp.getPages
 * @description
 * # getPages
 * Service in the testApp.
 */
angular.module('stackduinoApp')
  .factory("getPages", function($http, getApiRoots) {

	var page = {
	    doRequest: function(pageId) {
	      	return $http({
	      		method:'GET',
	      		url: getApiRoots.drupal + "pages/" + pageId,
	      		cache: true 
	      	});
	    }
	};

	var article = {
	    doRequest: function(articleId) {
	      	return $http({
	      		method:'GET',
	      		url: getApiRoots.drupal + "articles/" + articleId,
	      		cache: true 
	      	});
	    }
	};

    return {
      requestPage: function(pageId) { return page.doRequest(pageId); },
      requestArticle: function(articleId) { return article.doRequest(articleId); }
    };

});
