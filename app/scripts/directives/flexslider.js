'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:flexSlider
 * @description
 * # flexSlider
 */
angular.module('testApp')
  .directive('flexSlider', function ($timeout) {
    return {
      templateUrl: '../views/directives/flex-slider.html',
      restrict: 'A',
      scope: {
        items: '=flexSlider',
        showTitle: '=showTitle',
        slide: '=slide',
        interval: '=interval'
      },
      link: function postLink(scope, element, attrs) {
      	//Initiate flexslider
      	scope.$watch('items', function(old, updated) { //run isotope layout functions
    			$timeout(function(){
    				$('.js-flexslider').flexslider({
            			animation: scope.slide == true ? 'slide' : 'fade',
            			directionNav: false,
                  slideshowSpeed: 15000,
                  animationSpeed: 1000,
                  smoothHeight: true,
                  start: function(){
                  },
                  after: function(){
                  }
        			});
    			}, 50);
        }, true);
      }
    };
  });