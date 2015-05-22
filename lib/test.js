/* @flow */

var WPapi = require("wordpress-rest-api");

class TestClass {
  hello(name: string) {
    console.log("hello " + name);
  }
}

var x = new TestClass();
x.hello("john");
x.hello(1);
console.log(WPapi);
console.log(WPapi);
