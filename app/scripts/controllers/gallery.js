'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the testApp
 */
angular.module('stackduinoApp')
  .controller('GalleryCtrl', function ($scope, imageList) {

    $scope.images = imageList.data.photos.photo;

  });
