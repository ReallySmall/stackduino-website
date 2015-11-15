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

	var buildArticleList = {
	    doRequest: function() {
	      	return $http({
	      		method:'GET',
	      		url: getApiRoots.drupal + "build",
	      		cache: true 
	      	});
	    }
	};

	var buildArticle = {
	    doRequest: function(articleId) {
	      	return $http({
	      		method:'GET',
	      		url: getApiRoots.drupal + "build/" + articleId,
	      		cache: true 
	      	});
	    }
	};

    return {
      requestPages: function(pageId) { return page.doRequest(pageId); },
      requestBuildArticles: function() { return buildArticleList.doRequest(); },
      requestBuildArticle: function(articleId) { return buildArticle.doRequest(articleId); }
    };

});
