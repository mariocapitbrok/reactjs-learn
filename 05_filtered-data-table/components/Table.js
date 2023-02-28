"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TopMenu = _interopRequireDefault(require("./Table/TopMenu"));
require("../App.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Table(_ref) {
  var id = _ref.id,
    classes = _ref.classes,
    data = _ref.data;
  var className = classes ? classes : 'capitbrok';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_TopMenu.default, null), /*#__PURE__*/React.createElement("table", {
    id: id,
    className: className
  }, data));
}
var _default = Table;
exports.default = _default;