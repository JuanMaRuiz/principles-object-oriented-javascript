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
      .when('/functions', {
        templateUrl: 'views/functions.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/understanding-objects', {
        templateUrl: 'views/understanding-objects.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/constructors-prototypes', {
        templateUrl: 'views/constructors-prototypes.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/inheritance', {
        templateUrl: 'views/inheritance.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/object-patterns', {
        templateUrl: 'views/object-patterns.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
