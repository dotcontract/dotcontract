import Expression from "./Expression.js";
import { functionCallToPropName } from "../Functions.js";
import Context from "../Context.js";

describe("Expression", () => {
  it("should parse", async () => {
    let formula;

    expect(() => {
      new Expression(`<false`); 
    }).toThrow();

    formula = new Expression(`<false> true`); 
    expect(formula.constructor.name).toBe('DiamondFormula');
    expect(formula.inner.constructor.name).toBe('FalseAtom');
    expect(formula.outer.constructor.name).toBe('TrueAtom');

    formula = new Expression(`is(/here/this.md, "red")`); 
    expect(formula.constructor.name).toBe('FunctionAtom');
    expect(formula.args[0].constructor.name).toBe('Path');
    expect(formula.args[1].constructor.name).toBe('String');

    // formula = new Expression(`gfp(@x, [*]@x)`); 
    // console.log(formula)
  });

  it.skip("should parse", async () => {
    let formula, ctx, expandedFormula;
    formula = new Expression(`true and method_is("post")`);
    ctx = new Context({});
    expect(formula.getValue(ctx)).toBe(false);
    ctx.setValue("method", "post");
    expect(formula.getValue(ctx)).toBe(true);
    const methodIsPostPropName = functionCallToPropName("method_is", ["post"]);
    expandedFormula = formula.expandFunctions();
    expect(expandedFormula.constraint).toBe(`true and ${methodIsPostPropName}`);
    expect(expandedFormula.functions[methodIsPostPropName]).not.toBeNull();
    // expect(formula.getValue({ signedByMe: true })).toBe(true);

    // formula = new Expression("true and not ((not signedByMe))");
    // expect(formula.getValue()).toBe(false);
    // expect(formula.getValue({ signedByMe: true })).toBe(true);
  });

  it.skip("should not parse formulas with trailing extra text", async () => {
    expect(() => {
      new Expression(`true and method_is("post") but also garbage`);
    }).toThrow();
  });

  it.skip("should parse henceforth_must", async () => {
    let expr, mf;

    expr = new Expression(`henceforth_must (true)`);
    mf = expr.toModalFormula();
    expect(mf).toBe(`gfp(@x, [*]@x and true)`);

    expr = new Expression(`henceforth_must (signed_by("/my-key"))`);
    mf = expr.toModalFormula();
    expect(mf).toBe(
      `gfp(@x, [*]@x and signed_by__91_34_47_109_121_45_107_101_121_34_93)`
    );

    expr = new Expression(
      `henceforth_must (when (method_is("post")) also (signed_by("/my-key")))`
    );
    mf = expr.toModalFormula();
    expect(mf).toBe(
      `gfp(@x, [*]@x and not method_is__91_34_112_111_115_116_34_93 or signed_by__91_34_47_109_121_45_107_101_121_34_93)`
    );
  });
});