const assert = require("assert");
const iteratorFunction = require("./2i.js");

describe("Iterator Function suite,", function () {
  it("should return a+x", function () {
    const answer = iteratorFunction(1, 2);
    assert.strictEqual(3, answer);
  });
});
