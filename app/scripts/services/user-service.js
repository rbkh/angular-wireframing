'use strict';

/**
 * @ngdoc service
 * @name angularWireframingApp.userService
 * @description
 * # userService
 * Service in the angularWireframingApp.
 */
angular.module('angularWireframingApp')
  .service('userService', function($localStorage) {

    this.logIn = function() {
      return $localStorage.user = {
        name: 'Max'
      };
    };

    this.logOut = function() {
      delete $localStorage.user;
      return true;
    };

    this.getUser = function() {
      return $localStorage.user;
    };

    this.isLoggedIn = function() {
      return $localStorage.user ? true : false;
    };

  });
