"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function groupData(data, categoryFieldName) {
  var categories = [];
  data.forEach(function (item) {
    var categoryValue = item[categoryFieldName];
    if (!Array.isArray(categoryValue)) {
      var index = categories.findIndex(function (category) {
        return category.category === categoryValue;
      });
      if (index === -1) {
        categories.push({
          category: categoryValue,
          items: [item],
          itemsCount: 1
        });
      } else {
        categories[index].items.push(item);
        categories[index].itemsCount += 1;
      }
    } else {
      categoryValue.forEach(function (value) {
        var index = categories.findIndex(function (category) {
          return category.category === value;
        });
        if (index === -1) {
          categories.push({
            category: value,
            items: [item],
            itemsCount: 1
          });
        } else {
          categories[index].items.push(item);
          categories[index].itemsCount += 1;
        }
      });
    }
  });
  var categoriesB = categories.map(function (category) {
    return _objectSpread(_objectSpread({}, category), {}, {
      items: category.items.map(function (item) {
        var ignored = item[categoryFieldName],
          rest = _objectWithoutProperties(item, [categoryFieldName].map(_toPropertyKey));
        return rest;
      })
    });
  });
  return categoriesB;
}
var _default = groupData;
exports.default = _default;