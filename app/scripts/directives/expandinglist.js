'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:expandingList
 * @description
 * # expandingList
 */
angular.module('stackduinoApp')
  .directive('expandingList', function () {
    return {
      templateUrl: '../views/directives/expanding-list.html',
      restrict: 'AE',
      scope: {
      	items: '=expandingList'
      },
      link: function (scope, element, attributes) {
      }
    };
  });
