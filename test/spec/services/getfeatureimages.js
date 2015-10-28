'use strict';

describe('Service: getFeatureImages', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var getFeatureImages;
  beforeEach(inject(function (_getFeatureImages_) {
    getFeatureImages = _getFeatureImages_;
  }));

  it('should do something', function () {
    expect(!!getFeatureImages).toBe(true);
  });

});
