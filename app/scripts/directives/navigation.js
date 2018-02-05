'use strict';

/**
 * @ngdoc directive
 * @name angularWireframingApp.directive:navigation
 * @description
 * # navigation
 */
angular.module('angularWireframingApp')
  .directive('navigation', function() {

    var controller = function ($scope, userService) {
      $scope.logOut = userService.logOut;
      $scope.isLoggedIn = userService.isLoggedIn;
    };

    return {
      templateUrl: '/views/directives/navigation.html',
      restrict: 'E',
      controller: controller
    };
  });
