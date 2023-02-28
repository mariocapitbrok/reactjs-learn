"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function createKey() {
  var randomStr = Math.random().toString(36).slice(2, 11);
  return "".concat(randomStr);
}
var _default = createKey;
exports.default = _default;