import { expect, describe, test } from "@jest/globals";
import { runShellScriptTest } from "./helpers.js";

describe("CLI-Tests", () => {
  test("synthesizer script", async () => {
    const out_dir = runShellScriptTest("synthesizer");
    expect(out_dir.code).toEqual(0);
  });
});
