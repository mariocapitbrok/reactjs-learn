"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Head = _interopRequireDefault(require("./Head"));
var _Body = _interopRequireDefault(require("./Body"));
require("../../App.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function DataTable(_ref) {
  var id = _ref.id,
    data = _ref.data,
    headers = _ref.headers;
  return /*#__PURE__*/React.createElement("table", {
    id: id
  }, /*#__PURE__*/React.createElement(_Head.default, {
    data: data,
    headers: headers
  }), /*#__PURE__*/React.createElement(_Body.default, {
    data: data
  }));
}
var _default = DataTable;
exports.default = _default;