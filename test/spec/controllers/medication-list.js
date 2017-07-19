'use strict';

describe('Controller: MedicationListCtrl', function () {

  // load the controller's module
  beforeEach(module('angularWireframingApp'));

  var MedicationListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MedicationListCtrl = $controller('MedicationListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MedicationListCtrl.awesomeThings.length).toBe(3);
  });
});
