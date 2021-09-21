import { add } from "./calc";

describe("Calculator", () => {
  it("add two numbers", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
