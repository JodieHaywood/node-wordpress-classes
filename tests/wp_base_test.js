jest.dontMock("../lib/WP_Base.js");

var WP_Base = require("../lib/WP_Base.js");
var WP_api = require("wordpress-rest-api");

describe("Wordpress Base", function() {
  it("Should throw an error if accesed without initializing a url", function() {
    console.log("hey buddys");
    expect(function() {
      new WP_Base();
    }).toThrow("No wordpress URL set");

    expect(function() {
      WP_Base.getUrl();
    }).toThrow("No wordpress URL set");

    expect(function() {
      WP_Base.getApi();
    }).toThrow("No wordpress URL set");

    WP_Base.setUrl("myUrl");
    WP_Base.getUrl();
    new WP_Base();
  });
  it("Should initialize a WP api when the url is set", function() {
    expect(WP_api).toBeCalledWith({
      endpoint: "myUrl"
    });
  });
  it("Should return a WP api instance", function() {
    expect(WP_Base.getApi() instanceof WP_api).toBe(true);
  });
});
