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
        name: 'Ibuprofen',
        category: 'Tablet',
        quantity: 72,
        maxQuantity:  150
      },
      {
        name: 'Acetaminophen',
        category: 'Tablet',
        quantity: 17,
        maxQuantity:  200
      },
      {
        name: 'Lysine',
        category: 'Compound Liquid',
        quantity: '100ml',
        maxQuantity:  '350ml'
      },
      {
        name: 'Neomycin',
        category: 'Drops',
        quantity: '4.25ml',
        maxQuantity:  '5ml'
      },
      {
        name: 'Ciprofloxacin',
        category: 'Ointment',
        quantity: '2ml',
        maxQuantity:  '5ml'
      },
      {
        name: 'Amoxicillin',
        category: 'Compound Liquid',
        quantity: '13ml',
        maxQuantity:  '15ml'
      },
      {
        name: 'Methimazole',
        category: 'Tablet',
        quantity: '75',
        maxQuantity:  '75'
      },
      {
        name: 'Hydrocodone',
        category: 'Tablet',
        quantity: '24',
        maxQuantity:  '25'
      },
      {
        name: 'Amlodipine',
        category: 'Compound Liquid',
        quantity: '9.5ml',
        maxQuantity:  '10ml'
      },
      {
        name: 'Insulin',
        category: 'Injectable',
        quantity: '225u',
        maxQuantity:  '1000u'
      }
    ];
  });
