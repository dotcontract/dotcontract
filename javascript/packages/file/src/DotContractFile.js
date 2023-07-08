import fs from "fs";
import temp from "temp";
temp.track();
import AdmZip from "adm-zip";
import path from "path";

import DotContractDirectory from "@dotcontract/directory";
import { Commit, CommitAction } from "@dotcontract/contract";

export default class DotContractFile {
  constructor(filepath) {
    this.filepath = filepath;
    this.dirpath = null;
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

  static async fromDir(dirpath) {
    const pf = new DotContractFile(null);
    pf.directory = await DotContractDirectory.mount(dirpath);
    return pf;
  }

  static async getDCFromPath(contract_path) {
    let dcf = null;
    if (contract_path.endsWith(".contract")) {
      dcf = await this.open(contract_path);
    } else {
      dcf = await this.fromDir(path.join(contract_path, ".contract"));
    }
    return dcf;
  }

  async copyAttachmentsToTempDir() {
    let attachments_dir = null;
    if (await this.hasAttachments()) {
      attachments_dir = temp.mkdirSync();
      await this.copyAttachmentsToDir(attachments_dir);
    }
    return attachments_dir;
  }

  async open() {
    if (this.dirpath) {
      return;
    }
    this.dirpath = temp.mkdirSync();
    const zip = new AdmZip(this.filepath);
    zip.extractAllTo(this.dirpath, true, false, this.password);
    this.directory = await DotContractDirectory.mount(this.dirpath);
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

  async reCommit(commitLog, attachments_dir, start_indx, end_indx) {
    for (let i = start_indx; i <= end_indx; i++) {
      const attachments = [];
      const c = Commit.fromJSONString(commitLog[i]);
      for (const part of c.body) {
        const ca = new CommitAction(part);
        if (ca.hasAttachment()) {
          const file_hash = ca.getFileHash();
          const path = ca.getPath();
          const filepath = `${attachments_dir}/${file_hash}`;
          attachments.push({
            path,
            filepath,
          });
        }
      }
      for (const attachment of attachments) {
        await this.attach(attachment);
      }
      await this.commit(c.toJSON());
    }
    await this.save();
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

  async hasAttachments() {
    return this.directory.hasAttachments();
  }

  async copyAttachmentsToDir(path) {
    await this.directory.copyAttachmentsToDir(path);
  }

  async clear() {
    if (this.filepath) {
      fs.rmSync(`${this.filepath}`, { recursive: true });
    }
    await this.directory.clear();
  }

  async emptyDC() {
    const dotcontract_json = await this.getDotContractJson();
    const config_json = await this.getConfigJson();
    await this.clear();
    let dcf = null;
    if (this.filepath) {
      dcf = await DotContractFile.create(
        this.filepath,
        dotcontract_json,
        config_json
      );
    } else {
      const dcd = await DotContractDirectory.generate(
        this.directory.path,
        dotcontract_json,
        config_json
      );
      dcf = await DotContractFile.fromDir(dcd.path);
    }
    return dcf;
  }
}
