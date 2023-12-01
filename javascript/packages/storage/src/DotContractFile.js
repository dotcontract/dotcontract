import fs from "fs";
import AdmZip from "adm-zip";
import temp from "temp";
temp.track();

import DotContractDirectory from "./DotContractDirectory.js";

export default class DotContractFile extends DotContractDirectory {
  constructor(filepath) {
    const temp_dir = temp.mkdirSync();
    const dirpath = `${temp_dir}/.contract`;
    fs.mkdirSync(dirpath);
    super(dirpath);
    this.filepath = filepath;
    this.password = null;
    return this;
  }

  static async open(filepath) {
    const pf = new DotContractFile(filepath);
    await pf.open();
    return pf;
  }

  static async fromFile(input_file, output_file) {
    const pf = new DotContractFile(input_file);
    await pf.open();
    if (output_file) {
      pf.filepath = output_file;
      await pf.save();
    }
    return pf;
  }

  async open() {
    const zip = new AdmZip(this.filepath);
    zip.extractAllTo(this.dirpath, true, false, this.password);
    await this.mount();
  }

  static unzip(input, output, password) {
    const zip = new AdmZip(input);
    if (!fs.existsSync(output)) {
      fs.mkdirSync(output, { recursive: true });
    }
    zip.extractAllTo(`${output}/.contract`, true, false, password);
  }

  async save() {
    await this.zip(this.filepath);
  }

  async clear() {
    if (this.filepath) {
      fs.rmSync(`${this.filepath}`, { recursive: true });
    }
    await super.clear();
  }
}
