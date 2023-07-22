import { expect, describe, it } from "@jest/globals";
import shell from "shelljs";

function runShellScriptTest(name) {
  const out = shell.exec(`./${name}`, {
    cwd: "../../../tests",
    silent: true,
  });
  if (out.code != 0) {
    console.error(
      `Non-zero exit code: ${out.code}.\n\nSTDOUT:\n\n${out.stdout} \n\nSTDERR:\n\n${out.stderr}`
    );
  }
  return out;
}

describe("CLI-Tests", () => {
  it("should run cli tests script", async () => {
    const out_dir = runShellScriptTest('cli-tests-directory');
    expect(out_dir.code).toEqual(0);

    const out_file = runShellScriptTest('cli-tests-file');
    expect(out_file.code).toEqual(0);
  });
});
