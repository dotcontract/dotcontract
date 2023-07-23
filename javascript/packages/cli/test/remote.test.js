import { expect, describe, test } from "@jest/globals";
import { runShellScriptTest } from "./helpers.js";

// need to run these sequentially
describe("CLI-Tests", () => {
  test("cli access of remote contracts", async () => {
    let out;

    out = runShellScriptTest("remote-directory");
    expect(out.code).toEqual(0);

    out = runShellScriptTest("remote-file");
    expect(out.code).toEqual(0);
  });
});
