"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _SearchInput = _interopRequireDefault(require("./components/SearchInput.jsx"));
var _ToogleOption = _interopRequireDefault(require("./components/ToogleOption.jsx"));
var _Table = _interopRequireDefault(require("./components/Table.jsx"));
var _tableData = _interopRequireDefault(require("./data/tableData.js"));
require("./App.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(_SearchInput.default, null), /*#__PURE__*/React.createElement(_ToogleOption.default, null), /*#__PURE__*/React.createElement(_Table.default, {
    id: "my-table",
    data: _tableData.default
  }));
}
var _default = App;
exports.default = _default;