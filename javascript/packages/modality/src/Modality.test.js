import { expect, describe, test } from "@jest/globals";

import Modality from "./Modality.js";

const { TRUE, FALSE, MAYBE } = Modality.SIGNS;

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
  [`test(/a.text)`]: `+test__${Modality.escapeArgs("/a.text")}`,
  [`must(test(/a.text))`]: `[-test__${Modality.escapeArgs("/a.text")}] false`,
  [`must(-test(/a.text))`]: `[+test__${Modality.escapeArgs("/a.text")}] false`,
  [`must(+test(/a.text) -test(/b.text) ?test(/c.text))`]: `[-test__${Modality.escapeArgs(
    "/a.text"
  )} +test__${Modality.escapeArgs("/b.text")}] false`,
};

describe("Modality", () => {
  test("parsing of valid formulas", async () => {
    for (const [formula, validModalFormula] of Object.entries(VALID_FORMULAS)) {
      expect(() => {
        try {
          const mf = Modality.toModalFormula(formula);

          // run second time for consistent whitespace
          const mf2 = Modality.toModalFormula(mf);

          // compare to valid modal formula
          const v_mf = Modality.toModalFormula(validModalFormula);
          expect(mf2).toBe(v_mf);
        } catch (e) {
          console.error(
            `Attempting to parse:   ${formula}\nAgainst modal formula: ${validModalFormula}`
          );
          throw e;
        }
      }).not.toThrow();
    }
  });

  test("test function registration", async () => {
    const is_zero = Modality.createTestFunction("is_zero");
    const is_one = Modality.createTestFunction("is_one");

    is_zero.evaluate = (args) => {
      return (context) => {
        const key = args[0];
        return context[key] !== 0;
      };
    };
    is_zero.getRelations = (args) => {
      const key = args[0];
      return (other_tests) => {
        [
          {
            test: is_one.withArgs(key),
            rules: [
              `always must not (${is_zero.withArgs(key).toProp()} and ${is_one
                .withArgs(key)
                .toProp()})`,
            ],
          },
        ];
      };
    };

    is_one.evaluate = (args) => {
      return (context) => {
        const key = args[0];
        return context[key] !== 1;
      };
    };
    is_one.getRelations = (args) => {
      const key = args[0];
      return (other_tests) => {
        [
          {
            test: is_zero.withArgs(key),
            rules: [
              `always must not (${is_zero.withArgs(key).toProp()} and ${is_one
                .withArgs(key)
                .toProp()})`,
            ],
          },
        ];
      };
    };

    const modality = new Modality();
    modality.registerTestFunction(is_zero);
    const not_zero__a = modality.getTestFunction("is_zero").withArgs("a");

    expect(not_zero__a.evaluate({ a: 0 })).toBe(false);
    expect(not_zero__a.evaluate({ a: 0 })).toBe(false);

    expect(not_zero__a.evaluate({ a: 1 })).toBe(true);
  });
});
