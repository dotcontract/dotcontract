import { expect, describe, test } from "@jest/globals";
import { runShellScriptTest } from "./helpers.js";

describe("CLI-Tests", () => {
  test("basic-logic script", async () => {
    const out_dir = runShellScriptTest("basic-logic");
    expect(out_dir.code).toEqual(0);
  });
});
