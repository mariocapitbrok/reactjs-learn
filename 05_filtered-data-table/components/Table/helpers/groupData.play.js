"use strict";

var groupData = require('./groupData');
var fs = require('fs');

//const COFFEES = require('../../../data/coffees')
var PRODUCTS = require('../../../data/products');
var result = groupData(PRODUCTS, 'category');
console.log(result);
fs.writeFile('./src/tmp/result.js', "const result = ".concat(JSON.stringify(result, null, 2), "\n"), function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Result written to result.js');
});