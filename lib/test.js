/* @flow */
class TestClass {
  hello(name: string) {
    console.log("hello " + name);
  }
}

var x = new TestClass();
x.hello("john");
