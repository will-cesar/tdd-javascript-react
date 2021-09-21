describe("Addition", () => {
  let calc = null;

  beforeEach(() => {
    const options = {
      precision: 2,
    };

    calc = new Calculator(options);
  });

  it("add two positive numbers", () => {
    const result = calc.add(1.3334, 4.5);
    expect(result).toEqual(5.83);
  });

  it("add two negative numbers", () => {
    const result = calc.add(-1.3334, -4.5);
    expect(result).toEqual(-5.83);
  });
});
