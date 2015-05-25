var WP_Post = require("./WP_Post.js");
var WP_Base = require("./WP_Base.js");

console.log(Object.getOwnPropertyNames(WP_Base));
console.log(WP_Base["setUrl"]);
WP_Base.setUrl("my url");
console.log(WP_Base.getUrl());
console.log(WP_Post.getUrl())

