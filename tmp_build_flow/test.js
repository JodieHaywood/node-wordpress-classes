/* @flow */
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var TestClass = (function () {
  function TestClass() {
    _classCallCheck(this, TestClass);
  }

  _createClass(TestClass, [{
    key: "hello",
    value: function hello(name: string) {
      console.log("hello " + name);
    }
  }]);

  return TestClass;
})();

var x = new TestClass();
x.hello("john");
x.hello(1);
//# sourceMappingURL=test.js.map