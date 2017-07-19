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
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/medication-list', {
        templateUrl: 'views/medication-list.html',
        controller: 'MedicationListCtrl',
        controllerAs: 'medicationList'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
