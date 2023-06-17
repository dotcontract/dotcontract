import fs from "fs";
import temp from "temp";
temp.track();
import AdmZip from "adm-zip";

import DotContractDirectory from "@dotcontract/directory";

export default class DotContractFile {
  constructor(filepath) {
    this.filepath = filepath;
    this.dir_path = null;
    this.directory = null;
    this.password = null;
    return this;
  }

  static async create(filepath, genesis = null, config = null) {
    const temp_dir = temp.mkdirSync();
    try {
      const pd = await DotContractDirectory.generate(temp_dir, genesis, config);
      await pd.zip(filepath, temp_dir);
    } catch (e) {
      console.error(e);
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

  static unzip(input, output, password) {
    const zip = new AdmZip(input);
    zip.extractAllTo(output, true, false, password);
  }

  async isValid() {
    return this.directory.isValid();
  }

  async getDotContractJson() {
    return this.directory.getDotContractJson();
  }

  async getConfigJson() {
    return this.directory.getConfigJson();
  }

  async commit({ body, head }) {
    return this.directory.commit({ body, head });
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

  async attach({ path, filepath }) {
    return this.directory.attach({ path, filepath });
  }

  async linkContract(contract_path, server = null, user = null, port = null, identity = null) {
    await this.directory.linkContract(contract_path, server, user, port, identity);
  }

  async getLinkedContract() {
    return this.directory.getLinkedContract();
  }

  async hasAttachments() {
    return this.directory.hasAttachments();
  }

  async copyAttachments(path) {
    await this.directory.copyAttachments(path);
  }

  async clear() {
    if (this.filepath) {
      fs.rmSync(`${this.filepath}`, { recursive: true });
    }
    await this.directory.clear();
  }
}
