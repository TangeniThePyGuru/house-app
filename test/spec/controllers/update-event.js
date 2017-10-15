'use strict';

describe('Controller: UpdateEventCtrl', function () {

  // load the controller's module
  beforeEach(module('myHouseAppApp'));

  var UpdateEventCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpdateEventCtrl = $controller('UpdateEventCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
