'use strict';

describe('Controller: ApprovalsCtrl', function () {

  // load the controller's module
  beforeEach(module('myHouseAppApp'));

  var ApprovalsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApprovalsCtrl = $controller('ApprovalsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
