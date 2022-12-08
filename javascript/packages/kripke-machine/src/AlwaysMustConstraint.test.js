import AlwaysMustConstraint from "./AlwaysMustConstraint";

describe("AlwaysMustConstraint", () => {
  it("should work", async () => {
    new AlwaysMustConstraint("alwaysMust (a)");
    new AlwaysMustConstraint("alwaysMust (a) until (b)");
    new AlwaysMustConstraint("alwaysMust (a and c) until (b)");
    expect(() => {
      new AlwaysMustConstraint("sometimes (a)");
    }).toThrow();

    const c = new AlwaysMustConstraint("alwaysMust (a and not(c and true)) until (b)");
    expect(c.getFreeProps()).toEqual(new Set(["a", "b", "c"]));
  });
});
