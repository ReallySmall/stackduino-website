'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('stackduinoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularUtils.directives.dirPagination',
    'ng-breadcrumbs',
    'chart.js',
    'seo'
  ])
  .config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true)
    $routeProvider
      .when('/', {
        templateUrl: 'views/about.html',
        label: 'Home',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/404', {
        templateUrl: 'views/404.html',
        label: '404',
        controller: '404Ctrl',
        controllerAs: '404'
      })
      .when('/boards', {
        templateUrl: 'views/boards.html',
        label: 'Boards',
        controller: 'BoardsCtrl',
        controllerAs: 'boards'
      })
      .when('/boards/:board', {
        templateUrl: 'views/board.html',
        label: 'Board',
        controller: 'BoardsCtrl',
        controllerAs: 'board'
      })
      .when('/build', {
        templateUrl: 'views/build.html',
        label: 'Build',
        controller: 'BuildCtrl',
        controllerAs: 'build'
      })
      .when('/build/:nid', {
        templateUrl: 'views/build-article.html',
        label: 'Article',
        controller: 'BuildCtrl',
        controllerAs: 'build'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        label: 'Gallery',
        controller: 'GalleryCtrl',
        controllerAs: 'gallery'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
