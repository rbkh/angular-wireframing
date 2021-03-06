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
    'ngStorage',
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
      .otherwise({
        redirectTo: '/'
      });
  }).run(function ($rootScope, $localStorage, userService) {

    $rootScope.logoutHandler = userService.logOut;
    $rootScope.loggedIn = userService.isLoggedIn();

    if ($rootScope.loggedIn) {
      $rootScope.user = userService.getUser();
    }
    
  });
