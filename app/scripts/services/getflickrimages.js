'use strict';

/**
 * @ngdoc service
 * @name testApp.flickr
 * @description
 * # flickr
 * Service in the testApp.
 */
angular.module('testApp')

  .factory("getFlickrImages", function($http, getApiRoots) {

  	var apiArgs = {
  		apiKey: getApiRoots.flickrKey,
  		userId: '&user_id=54092274@N06',
  		format: '&format=json&nojsoncallback=1',
  		searchMethod: '&method=flickr.photos.search',
  		albumMethod: '&method=flickr.photosets.getPhotos',
  		imageSizeMethod: '&method=flickr.photos.getSizes',
  		photoSet: '&photoset_id=72157626574230146',
  		tags: '&tag_mode=all&tags=stackduino,-controller',
  		extras: '&extras=tags,owner_name,url_o',
  		mode: '&safe_search=1' 
  	};

  	var imgObj = {};

	var taggedWithStackduino = {
	    doRequest: function() {

	      	return $http({
	      		method:'GET',
    			dataType: 'json',
	      		url: getApiRoots.flickr + apiArgs.apiKey + apiArgs.format + apiArgs.searchMethod + apiArgs.tags + apiArgs.extras + apiArgs.mode,
	      		cache: true 
	      	});

	    }
	};

	var siteImages = {
		doRequest: function() {

	      	return $http({
	      		method:'GET',
    			dataType: 'json',
	      		url: getApiRoots.flickr + apiArgs.apiKey + apiArgs.userId + apiArgs.format + apiArgs.albumMethod + apiArgs.photoSet + apiArgs.extras + apiArgs.mode,
	      		cache: true 
	      	});

		}
	};

	var pageImages = {
		doRequest: function(obj) {

	      	return;

		}
	};

    return {
      requestAll: function() { 
      	return taggedWithStackduino.doRequest(); 
      },
      requestSiteImages: function() { 
      	return siteImages.doRequest(); 
      },
      requestPageImages: function(obj) {
      	imgObj = obj;
      	return pageImages.doRequest(obj);
      }
    };

});
