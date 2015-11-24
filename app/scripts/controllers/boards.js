'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */
angular.module('stackduinoApp')
  .controller('BoardsCtrl', function ($scope, $http, $location, getBoards, getFlickrImages) {

  getBoards.requestAll()
    .success(function(data, status, headers) {
      $scope.boards = data;
      console.log($scope.boards);
    });

    $scope.createPath = function(item){
      item = item.replace(/ /g, '-').toLowerCase();
      var url = $location.absUrl() + '/' + item;
      return url;
    };

    $scope.toClass = function(item){
      item = item.replace(/ /g, '-').toLowerCase();
      return item;
    }; 

  });