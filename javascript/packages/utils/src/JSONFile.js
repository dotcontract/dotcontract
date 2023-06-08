import fs from "fs";

export default class JSONFile {
  static readSync(path) {
    if (!path) {
      return null;
    }
    try {
      const buf = fs.readFileSync(path, "utf-8");
      return JSON.parse(buf);
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
