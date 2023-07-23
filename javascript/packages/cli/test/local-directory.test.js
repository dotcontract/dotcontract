import { expect, describe, test } from "@jest/globals";
import { runShellScriptTest } from "./helpers.js";

describe("CLI-Tests", () => {
  test("cli access of local dirs", async () => {
    const out_dir = runShellScriptTest("local-directory");
    expect(out_dir.code).toEqual(0);
  });
});
