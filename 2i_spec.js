const assert = require("assert");
const incrementFunctions = require("./2i.js");

describe("Iterator Function suite,", function () {
  it("should return target value for singleIteration", function () {
    const answer = incrementFunctions.singleIteration(2, 10);
    assert.strictEqual(10, answer);
  });

  xit("should return be able to return total value ", function () {
    const answer = incrementFunctions.iteratorFunction(3, 30, 10);
    assert.strictEqual(40, answer);
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
