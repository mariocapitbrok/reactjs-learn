"use strict";

var _createCells = _interopRequireDefault(require("./createCells.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var row = {
  id: 1,
  name: 'John Doe',
  age: 30
};
var isHeader = false;
var result = (0, _createCells.default)(row, isHeader);
console.log(result);