'use strict';

/**
 * @ngdoc function
 * @name angularWireframingApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularWireframingApp
 */
angular.module('angularWireframingApp')
  .controller('LoginCtrl', function ($scope) {
    $scope.users = [
      {
        email: 'max@brs.com'
      },
      {
        email: 'rebekah@brs.com'
      },
      {
        email: 'tim@brs.com'
      }
    ];
  });
