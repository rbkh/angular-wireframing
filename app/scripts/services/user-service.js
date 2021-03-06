'use strict';

/**
 * @ngdoc service
 * @name angularWireframingApp.userService
 * @description
 * # userService
 * Service in the angularWireframingApp.
 */
angular.module('angularWireframingApp')
  .service('userService', function($localStorage, $rootScope, $location) {

    this.logIn = function() {
      $localStorage.user = {
        name: 'Max'
      };
      $rootScope.loggedIn = true;
      $rootScope.user = $localStorage.user;
    };

    this.logOut = function() {
      delete $localStorage.user;
      delete $rootScope.user;
      $rootScope.loggedIn = false;
      $location.path('/');
      return true;
    };

    this.getUser = function() {
      return $localStorage.user;
    };

    this.isLoggedIn = function() {
      return $localStorage.user ? true : false;
    };

  });
