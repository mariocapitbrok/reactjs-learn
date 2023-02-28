"use strict";

var createUniqueId = require('./createKey');
var id1 = createUniqueId();
var id2 = createUniqueId();
console.log(id1, id2);