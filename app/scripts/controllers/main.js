'use strict';

/**
 * @ngdoc function
 * @name angularWireframingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWireframingApp
 */
angular.module('angularWireframingApp')
  .controller('MainCtrl', function ($scope, userService) {

    $scope.isLoggedin = userService.isLoggedin;

    $scope.user = userService.getUser();

  });
