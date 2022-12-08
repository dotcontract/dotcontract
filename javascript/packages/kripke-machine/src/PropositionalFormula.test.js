import PropositionalFormula from "./PropositionalFormula.js";

describe("PropositionalFormula", () => {
  it("should parse", async () => {
    let formula;
    formula = new PropositionalFormula("true and signedByMe");
    expect(formula.getValue()).toBe(false);
    expect(formula.getValue({ signedByMe: true })).toBe(true);

    formula = new PropositionalFormula("true and not ((not signedByMe))");
    expect(formula.getValue()).toBe(false);
    expect(formula.getValue({ signedByMe: true })).toBe(true);
  });

  it("should allow a default value for empty statements", async () => {
    let formula;
    formula = new PropositionalFormula("");
    expect(formula.getValue()).toBe(false);
    formula = new PropositionalFormula("", true);
    expect(formula.getValue()).toBe(true);
    formula = new PropositionalFormula("", false);
    expect(formula.getValue()).toBe(false);
  });
});
