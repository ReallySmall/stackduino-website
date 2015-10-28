'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:repoLink
 * @description
 * # repoLink
 */
angular.module('testApp')
  .directive('repoLink', function (getApiRoots) {
    return {
      templateUrl: '../views/directives/repo-link.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
