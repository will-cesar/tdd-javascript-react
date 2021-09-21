const users = ["Aluizio", "Developer"];

describe("Match arrays", () => {
  it("Verify array elements", () => {
    expect(users).toContainEqual("Aluizio");
    expect(users).toContain(users[0]);
  });
});
