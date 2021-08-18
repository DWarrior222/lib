/* !
  * library v1.0.0
  * 
  * (c) 2021 gsj
  */

import _asyncToGenerator from '@babel/runtime-corejs3/helpers/asyncToGenerator';
import _classCallCheck from '@babel/runtime-corejs3/helpers/classCallCheck';
import _regeneratorRuntime from '@babel/runtime-corejs3/regenerator';
import _includesInstanceProperty from '@babel/runtime-corejs3/core-js/instance/includes';
import _replaceAllInstanceProperty from '@babel/runtime-corejs3/core-js/instance/replace-all';
import _atInstanceProperty from '@babel/runtime-corejs3/core-js/instance/at';
import _findInstanceProperty from '@babel/runtime-corejs3/core-js/instance/find';
import _Map from '@babel/runtime-corejs3/core-js/map';
import axios from 'axios';

var People = function People() {
  _classCallCheck(this, People);
};

console.log(People);

var _context, _, _ref;

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(gen);
var a = 1;
var b = 2;

var Person = function Person() {
  _classCallCheck(this, Person);
};

var fun = function fun() {};

console.log(a, b, Person, fun, People, axios, 'axios');
console.log(_includesInstanceProperty(_context = []).call(_context, 1), _includesInstanceProperty(Array.prototype));
console.log((_ = (_ref = []) === null || _ref === void 0 ? void 0 : _ref[1]) !== null && _ !== void 0 ? _ : 'empty');
var budget = 1000000000000;
console.log(budget, budget === Math.pow(10, 12)); // true

console.log(typeof a === 'number');
var str1 = 'q=query+string+parameters';

var res1 = _replaceAllInstanceProperty(str1).call(str1, '+', ' ');

console.log(res1, 'res1');

function gen() {
  return _regeneratorRuntime.wrap(function gen$(_context2) {
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
console.log(_atInstanceProperty([1, 2]), g);
console.log(_findInstanceProperty(Array.prototype));
var map = new _Map([['a', 2]]);
console.log(map.emplace);

function test() {
  return _test.apply(this, arguments);
}

function _test() {
  _test = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    return _regeneratorRuntime.wrap(function _callee$(_context3) {
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
