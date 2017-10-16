'use strict';

describe('Controller: DatepickerctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('myHouseAppApp'));

  var DatepickerctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatepickerctrlCtrl = $controller('DatepickerctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
