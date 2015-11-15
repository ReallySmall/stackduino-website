'use strict';

/**
 * @ngdoc function
 * @name stackduinoApp.controller:BuildCtrl
 * @description
 * # BuildCtrl
 * Controller of the stackduinoApp
 */
angular.module('stackduinoApp')
  .controller('BuildCtrl', function ($scope, $routeParams, getPages) {

  	if($routeParams.nid){

  		getPages.requestBuildArticle($routeParams.nid)
        .success(function(data, status, headers) {
          $scope.article = data;
          $scope.title = $scope.article[0].title;
          $scope.body = $scope.article[0].body;
        });

  	} else {

  		getPages.requestBuildArticles()
        .success(function(data, status, headers) {
          $scope.articles = data;
          console.log($scope.articles);
        });

  	}

  });
