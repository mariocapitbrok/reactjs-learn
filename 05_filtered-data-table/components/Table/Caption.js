"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function Caption(_ref) {
  var key = _ref.key,
    caption = _ref.caption,
    classes = _ref.classes;
  return /*#__PURE__*/React.createElement("caption", {
    key: key,
    className: classes
  }, caption);
}
var _default = Caption;
exports.default = _default;