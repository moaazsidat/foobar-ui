'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sum = require('./Sum');

Object.defineProperty(exports, 'SumComponent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Sum).default;
  }
});

var _utils = require('./utils');

Object.defineProperty(exports, 'sum', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_utils).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sums = {};

exports.default = Sums;