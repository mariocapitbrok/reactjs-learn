"use strict";

var PRODUCTS = require('./products');
var productsCategories = PRODUCTS.map(function (product) {
  return product.category;
}).filter(function (category, index, array) {
  return array.indexOf(category) === index;
});
module.exports = productsCategories;