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
  		userId: '&user_id=54092274@N06',
  		format: '&format=json&nojsoncallback=1',
  		searchMethod: '&method=flickr.photos.search',
  		albumMethod: '&method=flickr.photosets.getPhotos',
  		imageSizeMethod: '&method=flickr.photos.getSizes',
  		photoSet: '&photoset_id=72157632341602394',
  		tags: '&tag_mode=all&tags=stackduino,-controller',
  		extras: '&extras=tags,owner_name,url_o',
  		mode: '&safe_search=1' 
  	};

  	var taggedWithStackduino = {
	    doRequest: function() {

      	return $http({
      		method:'GET',
    			dataType: 'json',
	      	url: getApiRoots.flickr + apiArgs.format + apiArgs.searchMethod + apiArgs.tags + apiArgs.extras + apiArgs.mode,
	      	cache: true 
	      });

	    }
  	};

  	var siteImages = {
  		doRequest: function() {

  	    return $http({
  	      method:'GET',
      		dataType: 'json',
  	      url: getApiRoots.flickr + apiArgs.userId + apiArgs.format + apiArgs.albumMethod + apiArgs.photoSet + apiArgs.extras + apiArgs.mode,
  	      cache: true 
  	     });

  		}
  	};

  	var siteImagesByTag = {
  		doRequest: function(data, tag) {

        var matchingImages = [];

        for(var i = 0; i < data.length; i++){
          var $this = data[i];
          if($this.tags.indexOf(tag) >= 0){ 
            var href = 'https://farm' + $this.farm + '.staticflickr.com/' + $this.server + '/' + $this.id + '_' + $this.secret + '_b.jpg';
            matchingImages.push(href);
          }
        }

  	    return matchingImages;

  		}
  	};

    return {
      requestAll: function() { 
      	return taggedWithStackduino.doRequest(); 
      },
      requestSiteImages: function() { 
      	return siteImages.doRequest(); 
      },
      filterByTag: function(obj) {
      	return filterByTag.doRequest(obj);
      }
    };

});
