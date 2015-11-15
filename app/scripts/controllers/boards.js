'uswqe strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */
angular.module('stackduinoApp')
  .controller('BoardsCtrl', function($scope, $routeParams, $http, $location, getBoards, getApiRoots) {

    var boardParam = $routeParams.board;

    getBoards.requestAll()
        .success(function(data, status, headers) {

          $scope.boards = data;

                          console.log($scope.boards);


          if(boardParam){

            for(var i = 0; i < $scope.boards.length; i++){

                var boardTitle = $scope.boards[i].title[0].value.replace(' ', '-').toLowerCase();

                if(boardParam === boardTitle){
                    $scope.board = $scope.boards[i];
                }

            }

            if(!$scope.board && boardParam){
              $location.path('/');
            }

          }     

    });

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