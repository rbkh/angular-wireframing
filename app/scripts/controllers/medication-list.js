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

    $scope.searchMedication = '';

    $scope.medications = [
      {
        name: 'advil',
        quantity: 72,
        maxQuantity:  150
      },
      {
        name: 'tylenol',
        quantity: 17,
        maxQuantity:  200
      },
      {
        name: 'insulin',
        quantity: 225,
        maxQuantity:  400
      }
    ];
  });
