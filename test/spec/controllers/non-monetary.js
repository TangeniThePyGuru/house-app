'use strict';

describe('Controller: NonMonetaryCtrl', function () {

  // load the controller's module
  beforeEach(module('myHouseAppApp'));

  var NonMonetaryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NonMonetaryCtrl = $controller('NonMonetaryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
