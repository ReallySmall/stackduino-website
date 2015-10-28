'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:blogEntries
 * @description
 * # blogEntries
 */
angular.module('testApp')
.directive('blogEntries', function ($timeout) {
return {
  templateUrl: '../views/directives/blog-entries.html',
  restrict: 'A',
  link: function (scope, element, attrs) {
  }
};
});
