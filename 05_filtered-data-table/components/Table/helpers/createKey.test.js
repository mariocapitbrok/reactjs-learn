"use strict";

var createKey = require('./createKey.js');
test('createKey generates a unique ID string', function () {
  var id1 = createKey();
  var id2 = createKey();
  expect(id1).not.toBe(id2);
  expect(typeof id1).toBe('string');
  expect(id1.length).toBe(9);
});