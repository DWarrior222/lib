/* !
  * library v1.0.0
  * 
  * (c) 2021 gsj
  */

'use strict';

var _asyncToGenerator = require('@babel/runtime-corejs3/helpers/asyncToGenerator');
var _classCallCheck = require('@babel/runtime-corejs3/helpers/classCallCheck');
var _regeneratorRuntime = require('@babel/runtime-corejs3/regenerator');
var _includesInstanceProperty = require('@babel/runtime-corejs3/core-js/instance/includes');
var _replaceAllInstanceProperty = require('@babel/runtime-corejs3/core-js/instance/replace-all');
var _atInstanceProperty = require('@babel/runtime-corejs3/core-js/instance/at');
var _findInstanceProperty = require('@babel/runtime-corejs3/core-js/instance/find');
var _Map = require('@babel/runtime-corejs3/core-js/map');
var axios = require('axios');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var _includesInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_includesInstanceProperty);
var _replaceAllInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_replaceAllInstanceProperty);
var _atInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_atInstanceProperty);
var _findInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_findInstanceProperty);
var _Map__default = /*#__PURE__*/_interopDefaultLegacy(_Map);
var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

var People = function People() {
  _classCallCheck__default['default'](this, People);
};

console.log(People);

var _context, _, _ref;

var _marked = /*#__PURE__*/_regeneratorRuntime__default['default'].mark(gen);
var a = 1;
var b = 2;

var Person = function Person() {
  _classCallCheck__default['default'](this, Person);
};

var fun = function fun() {};

console.log(a, b, Person, fun, People, axios__default['default'], 'axios');
console.log(_includesInstanceProperty__default['default'](_context = []).call(_context, 1), _includesInstanceProperty__default['default'](Array.prototype));
console.log((_ = (_ref = []) === null || _ref === void 0 ? void 0 : _ref[1]) !== null && _ !== void 0 ? _ : 'empty');
var budget = 1000000000000;
console.log(budget, budget === Math.pow(10, 12)); // true

console.log(typeof a === 'number');
var str1 = 'q=query+string+parameters';

var res1 = _replaceAllInstanceProperty__default['default'](str1).call(str1, '+', ' ');

console.log(res1, 'res1');

function gen() {
  return _regeneratorRuntime__default['default'].wrap(function gen$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked);
}

var g = gen();
console.log(_atInstanceProperty__default['default']([1, 2]), g);
console.log(_findInstanceProperty__default['default'](Array.prototype));
var map = new _Map__default['default']([['a', 2]]);
console.log(map.emplace);

function test() {
  return _test.apply(this, arguments);
}

function _test() {
  _test = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee() {
    return _regeneratorRuntime__default['default'].wrap(function _callee$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return 1;

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee);
  }));
  return _test.apply(this, arguments);
}

test();
