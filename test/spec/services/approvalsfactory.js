'use strict';

describe('Service: approvalsFactory', function () {

  // load the service's module
  beforeEach(module('myHouseAppApp'));

  // instantiate service
  var approvalsFactory;
  beforeEach(inject(function (_approvalsFactory_) {
    approvalsFactory = _approvalsFactory_;
  }));

  it('should do something', function () {
    expect(!!approvalsFactory).toBe(true);
  });

});
