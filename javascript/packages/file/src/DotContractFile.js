import fs from "fs";
import temp from "temp";
import AdmZip from "adm-zip";

import DotContractDirectory from "./DotContractDirectory.js";

export default class DotContractFile {
  constructor(filepath) {
    this.filepath = filepath;
    this.dir_path = null;
    this.directory = null;
    this.password = null;
    return this;
  }

  static async create(filepath) {
    const temp_dir = temp.mkdirSync();
    try {
      const pd = await DotContractDirectory.generate(temp_dir);
      await pd.zip(filepath, temp_dir);
    } catch (e) {
      throw e;
    } finally {
      temp.cleanupSync();
    }
    return DotContractFile.open(filepath);
  }

  static async open(filepath) {
    const pf = new DotContractFile(filepath);
    await pf.open();
    return pf;
  }

  async open() {
    if (this.dir_path) {
      return;
    }
    this.dir_path = temp.mkdirSync();
    const zip = new AdmZip(this.filepath);
    zip.extractAllTo(this.dir_path, true, false, this.password);
    this.directory = await DotContractDirectory.mount(this.dir_path);
  }

  static unzip(input, output) {
    const zip = new AdmZip(input);
    zip.extractAllTo(output, true, false, this.password);
  }

  async isValid() {
    return this.directory.isValid();
  }

  async getGenesis() {
    return this.directory.getGenesis();
  }

  async commit(method, body, meta) {
    return this.directory.commit(method, body, meta);
  }

  async saveTo(filepath) {
    await this.directory.zip(filepath);
  }

  async save() {
    await this.saveTo(this.filepath);
  }
}
