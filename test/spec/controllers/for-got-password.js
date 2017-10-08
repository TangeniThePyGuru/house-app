'use strict';

describe('Controller: ForGotPasswordCtrl', function () {

  // load the controller's module
  beforeEach(module('myHouseAppApp'));

  var ForGotPasswordCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ForGotPasswordCtrl = $controller('ForGotPasswordCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
