import { expect, describe, it } from "@jest/globals";
import shell from "shelljs";

describe("CLI-Tests", () => {
  it("should run cli tests script", async () => {
    const out_dir = shell.exec("./cli-tests-directory", {
      cwd: "../../../tests",
      silent: true,
    });
    expect(out_dir.code).toEqual(0);
    
    const out_file = shell.exec("./cli-tests-file", {
      cwd: "../../../tests",
      silent: true,
    });
    expect(out_file.code).toEqual(0);
  });
});
