'use strict';

describe('Service: functions', function () {

  // load the service's module
  beforeEach(module('myHouseAppApp'));

  // instantiate service
  var functions;
  beforeEach(inject(function (_functions_) {
    functions = _functions_;
  }));

  it('should do something', function () {
    expect(!!functions).toBe(true);
  });

});
