'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:menuItem
 * @description
 * # menuItem
 */
angular.module('testApp')
  .directive('menuItem', function () {
    return {
      templateUrl: '../views/directives/menu-item.html',
      restrict: 'A',
      replace: true,
      scope: {
      	title: '=title',
      	href: '=href',
      	icon: '=icon',
      	currentPath: '=currentPath'
      },
      link: function postLink(scope, element, attrs) {
      	scope.$watch('currentPath', function(old, updated) { //run isotope layout functions
        }, true);
      }
    };
  });
