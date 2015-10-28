'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:loadingIndicator
 * @description
 * # loadingIndicator
 */
angular.module('testApp')
  .directive('loadingIndicator', function () {
    return {
      templateUrl: '../views/directives/loading-indicator.html',
      restrict: 'AE',
      scope: {
      	items: '=loadingIndicator'
      },
      link: function (scope, element, attributes) {
      }
    };
  });