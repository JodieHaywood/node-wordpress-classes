/* @flow */

var WP_Base = require("./WP_Base.js");

class WP_Post extends WP_Base {
  
  // The ID the post we are calling
  constructor(ids: number) {
    super();
    
  }
  hello(name: string) {
    console.log("hello " + name);
  }
}

module.exports = WP_Post;
