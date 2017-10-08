'use strict';

describe('Controller: AddNewsCtrl', function () {

  // load the controller's module
  beforeEach(module('myHouseAppApp'));

  var AddNewsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddNewsCtrl = $controller('AddNewsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
