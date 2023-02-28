"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Caption = _interopRequireDefault(require("../components/Table/Caption.jsx"));
var _THead = _interopRequireDefault(require("../components/Table/THead.jsx"));
var _TBody = _interopRequireDefault(require("../components/Table/TBody.jsx"));
var _TFoot = _interopRequireDefault(require("../components/Table/TFoot.jsx"));
var _createRows = _interopRequireDefault(require("../components/Table/helpers/createRows.js"));
var _products = _interopRequireDefault(require("./products.js"));
var _createKey = _interopRequireDefault(require("../components/Table/helpers/createKey.js"));
var _groupData = _interopRequireDefault(require("../components/Table/helpers/groupData.js"));
var _excluded = ["items"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var headers = {
  name: null,
  price: null
};
var rows = [];
var jsxRows = [];
var categories = (0, _groupData.default)(_products.default, 'category').map(function (i) {
  return {
    category: "".concat(i.itemsCount, " ").concat(i.category),
    itemsCount: "",
    items: i.items
  };
});
categories.forEach(function (c) {
  var items = c.items,
    rest = _objectWithoutProperties(c, _excluded);
  rows.push(_objectSpread({}, rest));
  rows.push.apply(rows, _toConsumableArray(items.map(function (i) {
    return {
      name: i.name,
      price: i.price
    };
  })));
});
jsxRows.push.apply(jsxRows, _toConsumableArray((0, _createRows.default)(rows, false)));
var tableData = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_THead.default, {
  key: (0, _createKey.default)()
}, jsxRows), /*#__PURE__*/React.createElement(_THead.default, {
  key: (0, _createKey.default)(),
  jsxRows: jsxRows
}));
var _default = tableData;
exports.default = _default;