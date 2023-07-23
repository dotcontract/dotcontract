import { expect, describe, test } from "@jest/globals";
import { runShellScriptTest } from "./helpers.js";

describe("CLI-Tests", () => {
  test("cli access of local file", async () => {
    const out_dir = runShellScriptTest("local-file");
    expect(out_dir.code).toEqual(0);
  });
});
