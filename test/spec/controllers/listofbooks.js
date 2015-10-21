'use strict';

describe('Controller: ListofbooksCtrl', function () {

  // load the controller's module
  beforeEach(module('oojsNotesApp'));

  var ListofbooksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListofbooksCtrl = $controller('ListofbooksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListofbooksCtrl.awesomeThings.length).toBe(3);
  });
});
