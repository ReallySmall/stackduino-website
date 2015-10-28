'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('AboutCtrl', function ($scope, $http, $location, getPages, getApiRoots) {
    
  		getPages.requestAll()
        .success(function(data, status, headers) {
          $scope.aboutContent = data[0];
          $scope.title = $scope.aboutContent.title[0].value;
          $scope.body = $scope.aboutContent.body[0].value;
        });

  });
