'use strict';

/**
 * @ngdoc overview
 * @name angularWireframingApp
 * @description
 * # angularWireframingApp
 *
 * Main module of the application.
 */
angular
  .module('angularWireframingApp', [
    'ngAnimate',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
