import Expression from "./Expression.js";
import { functionCallToPropName, escapeArgs } from "../Functions.js";
import Context from "../Context.js";

const VALID_FORMULAS = {
  [`false`]: `false`,
  [`true`]: `true`,
  [`[true] false`]: `[true] false`,
  [`<true> true`]: `<true> true`,
  [`+a`]: "+a",
  [`-a`]: "-a",
  [`?a`]: "",
  [`+a -b ?c`]: "+a -b",
  [`[+a] false`]: `[+a] false`,
  [`[-b] false`]: `[-b] false`,
  [`[?c] false`]: `[] false`,
  [`[+a -b ?c] false`]: `[+a -b] false`,
  [`[+a -b ?c] +a -b ?c`]: `[+a -b] +a -b`,
  [`must(+a -b ?c)`]: `[-a +b] false`,
  [`can(+a -b ?c)`]: `<+a -b> true`,
  [`always(must(+a))`]: `gfp(@x, [] @x and [-a] false)`,
  [`eventually(can(+a))`]: `lfp(@x, [] @x or <+a> true)`,
  [`post(/a.text)`]: `+post__${escapeArgs("/a.text")}`,
  [`must(post(/a.text))`]: `[-post__${escapeArgs("/a.text")}] false`,
  // [`must(-post(/a.text))`]: `[+post__${escapeArgs('/a.text')}] false`,
  // [`must(+post(/a.text) -post(/b.text) ?post(/c.text))`]: `[+post__${escapeArgs('/a.text')}] false`
};

describe("Expression", () => {
  it("should parse valid formulas", async () => {
    for (const [formula, validModalFormula] of Object.entries(VALID_FORMULAS)) {
      expect(() => {
        try {
          const expr = new Expression(formula);
          const mf = expr.toModalFormula();

          // run second time for consistent whitespace
          const expr2 = new Expression(mf);
          const mf2 = expr2.toModalFormula();

          // compare to valid modal formula
          const vmf_expr = new Expression(validModalFormula);
          const vmf_mf = vmf_expr.toModalFormula();
          expect(mf2).toBe(vmf_mf);
        } catch (e) {
          console.error(
            `Attempting to parse:   ${formula}\nAgainst modal formula: ${validModalFormula}`
          );
          throw e;
        }
      }).not.toThrow();
    }
  });

  it("should parse empty signed props, boxes, and diamonds", async () => {
    new Expression("");
    new Expression("[] true");
    new Expression("<> true");
  });

  it("should parse", async () => {
    let formula;

    expect(() => {
      new Expression(`<false`);
    }).toThrow();

    formula = new Expression(`<false> true`);
    expect(formula.constructor.name).toBe("DiamondFormula");
    expect(formula.inner.constructor.name).toBe("FalseAtom");
    expect(formula.outer.constructor.name).toBe("TrueAtom");

    formula = new Expression(`is(/here/this.md, "red")`);
    expect(formula.constructor.name).toBe("FunctionAtom");
    expect(formula.args[0].constructor.name).toBe("Path");
    expect(formula.args[1].constructor.name).toBe("String");

    formula = new Expression(`[+a -b ?c] false`);

    // formula = new Expression(`gfp(@x, [*]@x)`);
    // console.log(formula)
  });

  it.skip("Expressionshould parse", async () => {
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
