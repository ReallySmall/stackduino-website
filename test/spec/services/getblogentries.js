'use strict';

describe('Service: getBlogEntries', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var getBlogEntries;
  beforeEach(inject(function (_getBlogEntries_) {
    getBlogEntries = _getBlogEntries_;
  }));

  it('should do something', function () {
    expect(!!getBlogEntries).toBe(true);
  });

});
