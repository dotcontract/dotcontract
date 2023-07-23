import shell from "shelljs";
import dirnameFromImportMeta from "@dotcontract/utils/dirnameFromImportMeta";
const __dirname = dirnameFromImportMeta(import.meta);

export function runShellScriptTest(name) {
  shell.env["DOTCONTRACT_CLI_BIN_DIR"] = `${__dirname}/../bin`;
  const out = shell.exec(`./run.sh`, {
    cwd: `../../../tests/${name}`,
    silent: true,
  });
  if (out.code != 0) {
    console.error(
      `Non-zero exit code: ${out.code}.\n\nSTDOUT:\n\n${out.stdout} \n\nSTDERR:\n\n${out.stderr}`
    );
  }
  return out;
}
