'use strict';

/**
 * @ngdoc function
 * @name angularWireframingApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularWireframingApp
 */
angular.module('angularWireframingApp')
  .controller('LoginCtrl', function ($scope, userService, $location) {

    $scope.logIn = function() {
      userService.logIn();
      $location.path('/');
    };

  });
