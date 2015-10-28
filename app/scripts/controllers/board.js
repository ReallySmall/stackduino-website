'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('BoardCtrl', function($scope, $routeParams, $http, $location, getBoards, getApiRoots) {

    var boardParam = $routeParams.board;

    getBoards.requestAll()
        .success(function(data, status, headers) {

        for(var i = 0; i < data.length; i++){
            var boardTitle = data[i].title[0].value.replace(' ', '-').toLowerCase();
            if(boardTitle === boardParam){
                $scope.boardData = data[i];
                console.log($scope.boardData);
                break;
            }
        }

        if(!$scope.boardData){
            $location.path('/');
        } else {

    	$scope.boardData.images = $scope.boardData._links[getBoards.imageHref];

    	//On document ready (move this into a directive)
        angular.element(document).ready(function(){

            //Get recent repository commits
            if($scope.boardData.field_repository_link[0].value){  
                
                var url_segments = $scope.boardData.field_repository_link[0].value.split('/');
                var repo_id = $.trim(url_segments[url_segments.length-1]);

                $http.get(getApiRoots.gitHub + repo_id + "/commits?per_page=3", 
                    {
                        timeout: 5000
                    }).success(function (data) {
                        $scope.commits = data;
                    });

                $http.get(getApiRoots.gitHub + repo_id + "/issues?per_page=3&state=open", 
                    {
                        timeout: 5000
                    }).success(function (data) {
                        $scope.issues = data;
                        console.log($scope.issues);
                    });

            }

        });

    }

      });

      });  
    	

