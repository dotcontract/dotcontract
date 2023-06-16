import { expect, describe, test } from "@jest/globals";

import Functions from "./Functions.js";

class PathSemantics {
  static getEffectedParentDirectories(variable) {
    if (variable[0] !== '/') {
      return [variable];
    }
    let dirs = variable.split('/');
    const r = [];
    const pwd = [];
    for (const dir of dirs) {
      pwd.push(dir);
      if (pwd.length > 1) {
        r.push(pwd.join('/'))
      } else {
        r.push('/')
      }
    }
    return r;
  }

  static expandEffected(effected) {
    const keys = Object.keys(effected);
    const r = {};
    for (const key of keys) {
      const dirs = PathSemantics.getEffectedParentDirectories(key);
      for (const dir of dirs) {
        r[dir] = true;
      }
    }
    return r;
  }
}

describe("Functions", () => {
  test("affect())", async () => {
    let r;
    r = await Functions.builtins.affect({ effected: { a: true } }, "a");
    expect(r).toBe(true);
    r = await Functions.builtins.affect({ effected: { a: true } }, "b");
    expect(r).toBe(false);
  });

  test("affect() with path semantics", async () => {
    let r;
    const ctx = { semantics: PathSemantics, effected: { "/a/b": true } };
    r = await Functions.builtins.affect(ctx, "/a/b");
    expect(r).toBe(true);
    r = await Functions.builtins.affect(ctx, "/a");
    expect(r).toBe(true);
    r = await Functions.builtins.affect(ctx, "/");
    expect(r).toBe(true);
    r = await Functions.builtins.affect(ctx, "/a/b/c");
    expect(r).toBe(false);
  });
});
