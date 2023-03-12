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

  static async fromFile(input_file, output_file) {
    const pf = new DotContractFile(input_file);
    await pf.open();
    if (output_file) {
      pf.filepath = output_file;
    }
    return pf;
  }

  static async fromDir(dir_path) {
    const pf = new DotContractFile(null);
    console.log(dir_path);
    pf.directory = await DotContractDirectory.mount(dir_path);
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
    if (this.filepath) {
      await this.saveTo(this.filepath);
    }
  }

  async getCommitLog() {
    return this.directory.getCommitLog();
  }

  async getCommitOrder() {
    return this.directory.getCommitOrder();
  }
}
