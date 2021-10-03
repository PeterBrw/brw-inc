"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DevProvider(_ref) {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: "100%",
      width: "100%",
      backgroundColor: "grey"
    }
  }, children);
}

var _default = DevProvider;
exports.default = _default;