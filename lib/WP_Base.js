class WP_Base {
  // URL for where to start the API
  static url: string;
  static setUrl(myUrl: string) {
    this.url = myUrl;
  }
  static getUrl(): string {
    return this.url;
  }
}

module.exports = WP_Base;
