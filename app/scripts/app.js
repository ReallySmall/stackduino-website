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
  .module('testApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularUtils.directives.dirPagination',
    'ng-breadcrumbs',
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
        controller: 'BoardCtrl',
        controllerAs: 'board'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        label: 'Blog',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/blog/:blogEntry', {
        templateUrl: 'views/blog-entry.html',
        label: 'BlogEntry',
        controller: 'BlogEntryCtrl',
        controllerAs: 'blogEntry'
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
