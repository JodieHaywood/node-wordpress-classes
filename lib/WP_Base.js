/* @flow */

var WP_api = require("wordpress-rest-api");

class WP_Base {
  static url: string;
  static api: Object;

  constructor() {
    if (WP_Base.url == undefined) {
      throw new Error("No wordpress URL set");
    }
  }

  // URL for where to start the API
  static setUrl(url: string) {
    this.url = url;
    this.api = new WP_api({endpoint: url});
  }

  static getUrl(): string {
    if (this.url == undefined) {
      throw new Error("No wordpress URL set");
    }
    return this.url;
  }

  static getApi() {
    if (this.url == undefined) {
      throw new Error("No wordpress URL set");
    }
    return this.api;
  }
}

module.exports = WP_Base;
