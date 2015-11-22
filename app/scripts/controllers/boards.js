'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */
angular.module('stackduinoApp')
  .controller('BoardsCtrl', function($scope, $routeParams, $http, $location, boardList) {

    var boardParam = $routeParams.board;
    $scope.boardList = boardList.data;

    if(boardParam){

      for(var i = 0; i < $scope.boardList.length; i++){
        var boardTitle = $scope.boardList[i].title[0].value.replace(' ', '-').toLowerCase();
        if(boardParam === boardTitle){
            $scope.board = $scope.boardList[i];
        }
      }

      if(!$scope.board && boardParam){
        $location.path('/');
      }

    }     

    $scope.createPath = function(item){
      item = item.replace(/ /g, '-').toLowerCase();
      var url = $location.absUrl() + '/' + item;
      return url;
    }; 

    $scope.display = {
      formats: {
        grid: true
      },
      sort: {
        order: true
      }
    };

});