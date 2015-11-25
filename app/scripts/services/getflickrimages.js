'use strict';

/**
 * @ngdoc service
 * @name testApp.flickr
 * @description
 * # flickr
 * Service in the testApp.
 */
angular.module('stackduinoApp')

  .factory("getFlickrImages", function($http, getApiRoots) {

    //api args to use for Flickr requests
    //api key is supplied from back end
  	var apiArgs = {
  		userId: '&user_id=54092274@N06',
  		format: '&format=json&nojsoncallback=1',
  		searchMethod: '&method=flickr.photos.search',
  		albumMethod: '&method=flickr.photosets.getPhotos',
  		imageSizeMethod: '&method=flickr.photos.getSizes',
  		photoSet: '&photoset_id=72157632341602394',
  		tags: '&tag_mode=all&tags=stackduino,-controller',
  		extras: '&extras=tags,owner_name,url_l',
  		mode: '&safe_search=1' 
  	};

    //get Flickr images tagged with 'Stackduino'
  	var taggedWithStackduino = {
	    doRequest: function() {
      	return $http({
      		method:'GET',
    			dataType: 'json',
	      	url: getApiRoots.flickr + apiArgs.format + apiArgs.searchMethod + apiArgs.tags + apiArgs.extras + apiArgs.mode,
	      	cache: true 
	      })
        .success(function(data, status, headers, conf) {
          return data;
        });

	    }
  	};

    //get image data from Flickr album
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

    //extract references to Flickr images which match the supplied tag
  	var siteImagesByTag = {
  		doRequest: function(data, tags) {

        var matchingImages = [];

        for(var i = 0; i < data.length; i++){
          var $this = data[i];
          var tagMatch = false;
          for(var j = 0; j < tags.length; j++){
            if($this.tags.indexOf(tags[j]) >= 0){
              tagMatch = true;
            } else {
              tagMatch = false;
              break;
            } 
          }
          if(tagMatch){
            var imageObj = {
              id : $this.id,
              href : 'https://farm' + $this.farm + '.staticflickr.com/' + $this.server + '/' + $this.id + '_' + $this.secret + '_b.jpg'
            };
            matchingImages.push(imageObj);
          }
        }
        
        cachedTags[tags] = matchingImages;

  	    return matchingImages;

  		}
  	};

    //object to cache results of previous image tag searches for quick retrieval
    //TODO - this doesn't work yet, the getting and setting are all wrong
    var cachedTags = {};

    return {
      requestAll: function() { 
      	return taggedWithStackduino.doRequest(); 
      },
      requestSiteImages: function() { 
      	return siteImages.doRequest(); 
      },
      filterByTag: function(data, tags) {
      	return siteImagesByTag.doRequest(data, tags);
      },
      cachedTag: function(tag) {
        if(cachedTags[tag]) {
          return cachedTags[tag]
        }
        return null;
      }
    };

});
