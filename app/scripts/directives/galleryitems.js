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
			images: '=galleryItems',
			newItemCount: '=newItemCount'
		},
		link: function (scope, element, attrs) {

			var initialised = false;
		    	
	    	var masonryGrid = { //methods for creating, updating and destroying masonry layouts
	    		init: function(){
	    			$timeout(function () {
	        			element.isotope({
	            			itemSelector: '.gallery-image',
	        				layoutMode: 'masonry',
	        				transformsEnabled : false
	            		});	
	        		}, 100);
	        		initialised = true;
	    		},
	    		layout: function(){
	    			$timeout(function () {
	    				console.log(1);
	    				console.log(element.find('li').slice(-scope.newItemCount));
	    				var items = element.find('li').slice(-scope.newItemCount);
	    				items.hide()
	        			element.isotope('appended', items, items.fadeIn('slow'));	
	        		}, 100);
	    		},
	    	};

			scope.$watch('images', function(old, updated) { //run isotope layout functions

					if(scope.images && scope.images.length){
						$timeout(function(){
							initialised == true ? masonryGrid.layout() : masonryGrid.init();
						}, 250);
					}
		
	    	}, true);
		    	
		}
	};
});
