jest.dontMock("../lib/WP_Base");

describe("test", function() {
  it("works", function() {
    expect(true).toEqual(true);
    expect(true).toEqual(false);
  });
});
