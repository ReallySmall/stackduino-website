'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('stackduinoApp')
  .controller('MainCtrl', function ($scope, $rootScope, breadcrumbs, getWrapperContent, getFlickrImages, $location) {
  	//breadcrumbs.options = { 'Board': $routeProvider.board };
  	$scope.breadcrumbs = breadcrumbs;
    $scope.featureImages = [];
    $scope.featureImageCount = 5;
    $scope.socialLinks = [];
    $scope.footerLinks = [];

  	getFlickrImages.requestSiteImages()
        .success(function(data, status, headers) {
          var rawResults = data.photoset.photo;
          for(var i = 0, j = 0; i < rawResults.length; i++){
            if(rawResults[i].tags.indexOf('feature') >= 0 && rawResults[i].width_o >= 1024 && rawResults[i].width_o >= 650){ //if tagged as a feature
              //add it to the features array
              $scope.featureImages.push(rawResults[i]);
              if(++j >= $scope.featureImageCount){
                break;
              }
            }
          }
          for(var i = 0; i < $scope.featureImages.length; i++){
            var $this = $scope.featureImages[i];              
            $this.href = 'https://farm' + $this.farm + '.staticflickr.com/' + $this.server + '/' + $this.id + '_' + $this.secret + '_b.jpg';
          }
        });

    $scope.socialLinks = [ //hardcoded for now, maybe get this from api in future
      {
        title: 'ReallySmall on GitHub',
        href: 'https://github.com/ReallySmall',
        icon: 'github-square'
      },
      {
        title: 'ReallySmall on Flickr',
        href: 'https://www.flickr.com/photos/reallysmall',
        icon: 'flickr'
      },
      {
        title: 'Contact',
        href: 'mailto:reallysmallmacro@gmail.com',
        icon: 'envelope-square'
      }
    ]

    $scope.menuItems = [ //hardcoded for now, maybe get this from api in future
      {
        title: 'Boards',
        href: '/boards',
        icon: 'code-fork'
      },
      {
        title: 'Build',
        href: '/build',
        icon: 'gears'
      },
      {
        title: 'Gallery',
        href: '/gallery',
        icon: 'star'
      },
    ];

    getWrapperContent.requestHeader()
      .success(function(data, status, headers) {
        //$scope.socialLinks = data;
      });

    getWrapperContent.requestFooter()
      .success(function(data, status, headers) {
        $scope.footerLinks = data;
      });

    $scope.isCurrentPath = function (path) {
      if(path === '/'){
        return $location.path() === path; 
      }
      return $location.path().indexOf(path) === 0;
    };

    // SEO REQUIREMENT: 
    // PhantomJS pre-rendering workflow requires the page to declare, through htmlReady(), that
    // we are finished with this controller. 
    $scope.htmlReady();



  });