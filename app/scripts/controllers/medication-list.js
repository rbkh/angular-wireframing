'use strict';

/**
 * @ngdoc function
 * @name angularWireframingApp.controller:MedicationListCtrl
 * @description
 * # MedicationListCtrl
 * Controller of the angularWireframingApp
 */
angular.module('angularWireframingApp')
  .controller('MedicationListCtrl', function ($scope) {
    $scope.medications = [
      {
        name: 'advil',
        quantity: 150
      },
      {
        name: 'tylenol',
        quantity: 200
      }
    ];
  });
