'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:boardList
 * @description
 * # boardList
 */
angular.module('stackduinoApp')
  .directive('boardList', function ($timeout) {
    return {
      templateUrl: '../views/directives/board-list.html',
      restrict: 'A',
      scope: {
        listItems: '=listItems'
      },
      link: function (scope, element, attrs) {
        	
        	var masonryGrid = { //methods for creating, updaing and destroying masonry layouts
        		initialised: false,
        		init: function(){
        			$timeout(function () {
	        			element.isotope({
	            		itemSelector: '.board',
	        				layoutMode: 'masonry',
	        				getSortData: {
	        					boardId: '[data-board-id]'
	        				}
	            		});	
            		}, 50);
            		masonryGrid.initialised = true;
        		},
        		sort: function(direction){
        			if(masonryGrid.initialised){
	                	$timeout(function () {
                			element.isotope({
                				sortBy: 'boardId',
                				sortAscending: direction === 'ascending' ? true: false
                			});
	                	}, 50); 
	            	}
        		},
        		destroy: function(){
        			if(masonryGrid.initialised){
	                	$timeout(function () {
	                		element.isotope('destroy');
	                	}, 50); 
	            	}
        			masonryGrid.initialised = false;
        		}
        	};

  				$timeout(function(){
  					masonryGrid.init();
  				}, 50);
    	
    		scope.$watch('display.formats.grid', function(grid, list) { //re-run masonry when called by layout change control
				if(masonryGrid.initialised){
					masonryGrid.destroy();
					masonryGrid.init();
				}
			}, true);

			scope.$watch('display.sort.order', function(original, reverse) { //resort masonry when called by sort change control
     			if(masonryGrid.initialised){
            masonryGrid.sort(reverse == true ? 'ascending' : 'descending');
     			}
 			}, true);
        	
      }
    };
  });