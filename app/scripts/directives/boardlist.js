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
      link: function (scope, element, attrs) {
        	
      }
    };
  });