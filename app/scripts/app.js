'use strict';

/**
 * @ngdoc overview
 * @name oojsNotesApp
 * @description
 * # oojsNotesApp
 *
 * Main module of the application.
 */
angular
  .module('oojsNotesApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/oojs', {
        templateUrl: 'views/oojs/main.html',
        controller: 'ListofbooksCtrl',
        controllerAs: 'bookList'
      })
      .when('/functions', {
        templateUrl: 'views/oojs/functions.html',
        controller: '../ListofbooksCtrl',
        controllerAs: 'bookList'
      })
      .when('/understanding-objects', {
        templateUrl: 'views/oojs/understanding-objects.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/constructors-prototypes', {
        templateUrl: 'views/oojs/constructors-prototypes.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/inheritance', {
        templateUrl: 'views/oojs/inheritance.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/object-patterns', {
        templateUrl: 'views/oojs/object-patterns.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
