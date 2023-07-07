import { expect, describe, test } from "@jest/globals";

import Functions from "./Functions.js";
import PathSemantics from './semantics/PathSemantics.js'

describe("Functions", () => {
  test("affect())", async () => {
    let r;
    r = await Functions.list.affect({ effected: { a: true } }, "a");
    expect(r).toBe(true);
    r = await Functions.list.affect({ effected: { a: true } }, "b");
    expect(r).toBe(false);
  });

  test("affect() with path semantics", async () => {
    let r;
    const ctx = { semantics: PathSemantics, effected: { "/a/b": true } };
    r = await Functions.list.affect(ctx, "/a/b");
    expect(r).toBe(true);
    r = await Functions.list.affect(ctx, "/a");
    expect(r).toBe(true);
    r = await Functions.list.affect(ctx, "/");
    expect(r).toBe(true);
    r = await Functions.list.affect(ctx, "/a/b/c");
    expect(r).toBe(false);
  });
});
