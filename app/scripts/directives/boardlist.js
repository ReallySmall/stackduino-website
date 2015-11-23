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
        listItems: '=listItems',
        sort: '=sort'
      },
      link: function (scope, element, attrs) {

  			scope.$watch('sort', function(original, reverse) { //resort masonry when called by sort change control
          element.isotope({
            sortBy: 'boardId',
            sortAscending: direction === 'ascending' ? true: false
          });
   			}, true);
        	
      }
    };
  });