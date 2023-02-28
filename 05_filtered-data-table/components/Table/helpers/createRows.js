"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Tr = _interopRequireDefault(require("../Tr.jsx"));
var _createCells = _interopRequireDefault(require("./createCells.js"));
var _createKey = _interopRequireDefault(require("./createKey.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function createRows(rows) {
  var isHeader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return rows.map(function (row) {
    var cells = (0, _createCells.default)(row, isHeader);
    return /*#__PURE__*/React.createElement(_Tr.default, {
      key: row.id || (0, _createKey.default)()
    }, cells);
  });
}
var _default = createRows;
exports.default = _default;