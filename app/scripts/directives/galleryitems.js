'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:galleryItems
 * @description
 * # galleryItems
 */
angular.module('testApp')
	.directive('galleryItems', function ($timeout) {
	return {
		templateUrl: '../views/directives/image-list.html',
		restrict: 'A',
		replace: true,
		scope: {
			images: '=galleryItems',
			imageWidths: '=imageWidths'
		},
		link: function (scope, element, attrs) {
		    	
	    	var masonryGrid = { //methods for creating, updaing and destroying masonry layouts
	    		init: function(){
	    			$timeout(function () {
	        			element.isotope({
	            			itemSelector: '.gallery-image',
	        				layoutMode: 'masonry'
	            		});	
	        		}, 50);
	    		},
	    	};

			scope.$watch('images', function(old, updated) { //run isotope layout functions

					if(scope.images && scope.images.length){
						$timeout(function(){
							masonryGrid.init();
						}, 50);
					}
		
	    	}, true);
		    	
		}
	};
});
