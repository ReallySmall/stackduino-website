'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:fieldItem
 * @description
 * # fieldItem
 */
angular.module('stackduinoApp')
  .directive('fieldItem', function () {
    return {
      templateUrl: '../views/directives/field-item.html',
      replace: true,
      restrict: 'A',
      scope: {
      	field: '=fieldItem'
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
