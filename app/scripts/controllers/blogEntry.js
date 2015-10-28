'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('BlogEntryCtrl', function ($scope, $routeParams, $http, $location, getBlogEntries) {

  $scope.blogEntry = '';
  var blogParam = $routeParams.blogEntry;

	getBlogEntries.requestAll()
        .success(function(data, status, headers) {

          for(var i = 0; i < data.length; i++){
              var blogEntryTitle = data[i].title[0].value.replace(/ /g, '-').toLowerCase();
              if(blogEntryTitle === blogParam){
                  $scope.blogEntry = data[i];
                  break;
              }
          }

          $scope.title = $scope.blogEntry.title[0].value;
          $scope.date = $scope.blogEntry.created[0].value;
          $scope.body = $scope.blogEntry.body[0].value;

        });

    $scope.createPath = function(item){
    	item = item.replace(' ', '-').toLowerCase();
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
