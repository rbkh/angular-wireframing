'use strict';

describe('Directive: deviceSelector', function () {

  // load the directive's module
  beforeEach(module('angularWireframingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<device-selector></device-selector>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the deviceSelector directive');
  }));
});
