const assert = require("assert");
const incrementFunctions = require("./2i.js");

describe("Iterator Function suite,", function () {
  it("should return target value for singleIteration", function () {
    const answer = incrementFunctions.singleIteration(2, 10);
    assert.strictEqual(10, answer);
  });

  it("should return be able to return total value ", function () {
    const answer = incrementFunctions.iteratorFunction(3, 30);
    assert.strictEqual(92, answer);
  });

  it("should return be able to handle high values ", function () {
    const answer = incrementFunctions.iteratorFunction(100, 2000);
    assert.strictEqual(6060, answer);
  });
});
