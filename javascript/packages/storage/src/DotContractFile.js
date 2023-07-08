import fs from "fs";
import AdmZip from "adm-zip";
import path from "path";
import temp from "temp";
temp.track();

import DotContractDirectory from "./DotContractDirectory.js"

export default class DotContractFile extends DotContractDirectory{
  constructor(filepath) {
    super();
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
      pf.save();
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
    zip.extractAllTo(output, true, false, password);
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
