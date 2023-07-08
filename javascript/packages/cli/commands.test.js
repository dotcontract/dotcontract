import { expect, describe, it } from "@jest/globals";
import shell from "shelljs";

describe("CLI-Tests", () => {
  it("should run cli tests script", async () => {
    const out = shell.exec("./cli-tests", {
      cwd: "../../../tests",
      silent: true,
    });
    expect(out.stderr).toEqual("");
  });
});
