import fs from "fs";

export default class JSONFile {
  /**
   *
   * @param {string} path
   * @returns
   */
  static readSync(path) {
    if (!path) {
      return null;
    }
    const buf = fs.readFileSync(path, "utf-8");
    return JSON.parse(buf);
  }

  static readSyncOrReturnDefault(path, defaultValue) {
    try {
      return JSONFile.readSync(path);
    } catch (e) {
      return defaultValue;
    }
  }

  /**
   *
   * @param {string} path
   * @param {JSON} json
   * @returns
   */
  static writeSync(path, json) {
    const json_string = JSON.stringify(json);
    return fs.writeFileSync(path, json_string, "utf-8");
  }

  /**
   *
   * @param {string} path
   * @param {JSON} patch
   * @returns
   */
  static patchObjectSync(path, patch) {
    const original_json = JSONFile.readSync(path);
    const json = {
      ...original_json,
      ...patch,
    };
    return JSONFile.writeSync(path, json);
  }

  static writeOrPatchObjectSync(path, patch) {
    if (!fs.existsSync(path)) {
      JSONFile.writeSync(path, patch);
    } else {
      JSONFile.patchObjectSync(path, patch);
    }
  }
}
