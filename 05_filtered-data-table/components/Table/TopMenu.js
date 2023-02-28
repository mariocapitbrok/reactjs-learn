"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
require("../../App.css");
function TopMenu() {
  return /*#__PURE__*/React.createElement("div", {
    className: "top-menu"
  }, /*#__PURE__*/React.createElement("button", {
    className: "densityBtn"
  }, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faTableList
  })), /*#__PURE__*/React.createElement("button", {
    className: "fullScreenBtn"
  }, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faMaximize
  })));
}
var _default = TopMenu;
exports.default = _default;