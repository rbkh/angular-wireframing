'use strict';

/**
 * @ngdoc directive
 * @name angularWireframingApp.directive:navigation
 * @description
 * # navigation
 */
angular.module('angularWireframingApp')
  .directive('navigation', function () {
    return {
      templateUrl: '/views/directives/navigation.html',
      restrict: 'E'
    };
  });
