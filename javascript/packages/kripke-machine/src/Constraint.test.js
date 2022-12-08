import Constraint from "./Constraint";

describe("Constraint", () => {
  it("should work", async () => {
    new Constraint("alwaysMust (a)");
    new Constraint("alwaysMust (a) until (b)");
    new Constraint("alwaysMust (a and c) until (b)");
    expect(() => {
      new Constraint("sometimes (a)");
    }).toThrow();

    const c = new Constraint("alwaysMust (a and not(c and true)) until (b)");
    expect(c.getFreeProps()).toEqual(new Set(["a", "b", "c"]));
  });
});
