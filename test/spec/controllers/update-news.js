'use strict';

describe('Controller: UpdateNewsCtrl', function () {

  // load the controller's module
  beforeEach(module('myHouseAppApp'));

  var UpdateNewsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpdateNewsCtrl = $controller('UpdateNewsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
