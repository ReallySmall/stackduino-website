'use strict';

describe('Service: getBoards', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var getBoards;
  beforeEach(inject(function (_getBoards_) {
    getBoards = _getBoards_;
  }));

  it('should do something', function () {
    expect(!!getBoards).toBe(true);
  });

});
