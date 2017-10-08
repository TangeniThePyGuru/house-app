'use strict';

describe('Controller: NewsItemCtrl', function () {

  // load the controller's module
  beforeEach(module('myHouseAppApp'));

  var NewsItemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewsItemCtrl = $controller('NewsItemCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
