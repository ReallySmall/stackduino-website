'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:galleryItems
 * @description
 * # galleryItems
 */
angular.module('stackduinoApp')
	.directive('galleryItems', function ($timeout) {
	return {
		templateUrl: '../views/directives/image-list.html',
		restrict: 'A',
		replace: true,
		scope: {
			images: '=galleryItems'
		},
		link: function (scope, element, attrs) {

			var initialised = false;
		    	
	    	var masonryGrid = { //methods for creating, updating and destroying masonry layouts
	    		init: function(){
	    			$timeout(function () {
	        			element.isotope({
	            			itemSelector: '.gallery-image',
	        				layoutMode: 'masonry'
	            		});	
	        		}, 100);
	    		},
	    	};

			scope.$watch('images', function(old, updated) { //run isotope layout functions

					if(scope.images && scope.images.length){
						$timeout(function(){
							masonryGrid.init();
						}, 250);
					}
		
	    	}, true);
		    	
		}
	};
});
