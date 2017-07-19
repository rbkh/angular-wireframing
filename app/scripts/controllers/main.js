'use strict';

/**
 * @ngdoc function
 * @name angularWireframingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWireframingApp
 */
angular.module('angularWireframingApp')
  .controller('MainCtrl', function ($scope) {

    $scope.setDevice = function (device) {
      angular.element('.device').removeClass('phone').removeClass('tablet');
      angular.element('.device').addClass(device);
    }

  });
