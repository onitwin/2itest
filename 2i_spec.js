const assert = require("assert");
const incrementFunctions = require("./2i.js");

describe("Iterator Function suite,", function () {
  it("should return target value for single iteration", function () {
    const answer = incrementFunctions.singleIteration(1, 2);
    assert.strictEqual(3, answer);
  });

  xit("should return target value ", function () {
    const answer = iteratorFunction(1, 2);
    assert.strictEqual(3, answer);
  });

  xit("should return target value ", function () {
    const answer = iteratorFunction(1, 2);
    assert.strictEqual(3, answer);
  });

  xit("should return target value ", function () {
    const answer = iteratorFunction(1, 2);
    assert.strictEqual(3, answer);
  });
});
