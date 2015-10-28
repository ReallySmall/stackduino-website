'use strict';

describe('Service: GetGitHub', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var GetGitHub;
  beforeEach(inject(function (_GetGitHub_) {
    GetGitHub = _GetGitHub_;
  }));

  it('should do something', function () {
    expect(!!GetGitHub).toBe(true);
  });

});
