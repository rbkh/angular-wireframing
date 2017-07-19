'use strict';

/**
 * @ngdoc directive
 * @name angularWireframingApp.directive:deviceSelector
 * @description
 * # deviceSelector
 */
angular.module('angularWireframingApp')
  .directive('deviceSelector', function () {

    var controller = function ($scope) {
      $scope.setDevice = function (device) {
        angular.element('.device').removeClass('phone').removeClass('tablet').removeClass('desktop');
        angular.element('.device').addClass(device);
      };
    };

    return {
      templateUrl: '/views/directives/device-selector.html',
      restrict: 'E',
      controller: controller
    };
  });
