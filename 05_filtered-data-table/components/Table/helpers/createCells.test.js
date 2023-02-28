"use strict";

var _react = require("@testing-library/react");
var _createCells = _interopRequireDefault(require("./createCells.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('createCells function', function () {
  it('should render Td components when isHeader is false', function () {
    var row = {
      id: 1,
      name: 'John Doe',
      age: 30
    };
    var isHeader = false;
    (0, _react.render)( /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, (0, _createCells.default)(row, isHeader)))));
    expect(_react.screen.getByText('John Doe')).toBeInTheDocument();
    expect(_react.screen.getByText('30')).toBeInTheDocument();
  });
  it('should render Th components when isHeader is true', function () {
    var row = {
      id: 1,
      name: 'John Doe',
      age: 30
    };
    var isHeader = true;
    (0, _react.render)( /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, (0, _createCells.default)(row, isHeader)))));
    expect(_react.screen.getByText('John Doe')).toBeInTheDocument();
    expect(_react.screen.getByText('30')).toBeInTheDocument();
  });
  it('when there is id field, should use it to generate key', function () {
    var row = {
      id: 1,
      name: 'John Doe',
      age: 30
    };
    var data = (0, _createCells.default)(row);
    expect(data[0].key).toBe('1-id');
  });
  it('when NO id field use createKey() for a string key of length 9', function () {
    var row = {
      name: 'John Doe',
      age: 30
    };
    var data = (0, _createCells.default)(row);
    var createdId = data[0].key;
    expect(typeof createdId).toBe('string');
    expect(createdId.length).toBe(9);
  });
});