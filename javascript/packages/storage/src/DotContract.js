import path from "path";

import DotContractDirectory from "./DotContractDirectory.js";
import DotContractFile from "./DotContractFile.js";

const TYPE_DIR = "Directory";
const TYPE_FILE = "File";

export default class DotContract {
  constructor(type = TYPE_DIR) {
    this.type = type;
    this.dotcontract = null;
  }

  static async createDCD(dirpath, genesis, config) {
    const pd = new DotContractDirectory(dirpath);
    await pd.generate(genesis, config);
    return pd;
  }

  static async createDCF(filepath, genesis, config) {
    const pf = new DotContractFile(filepath);
    await pf.generate(genesis, config);
    await pf.zip(pf.filepath, pf.dirpath);
    return pf;
  }

  static async getDCFromFile(filepath) {
    const dc = new DotContract(TYPE_FILE);
    dc.dotcontract = await DotContractFile.open(filepath);
    return dc;
  }

  static async getDCFromDir(dirpath) {
    const dc = new DotContract(TYPE_DIR);
    dc.dotcontract = await DotContractDirectory.fromDir(
      path.join(dirpath, ".contract")
    );
    return dc;
  }

  static async getDCFromPath(dotcontract_path) {
    let dc = null;
    if (dotcontract_path.endsWith(".contract")) {
      dc = new DotContract(TYPE_FILE);
      dc.dotcontract = await DotContract.getDCFromFile(dotcontract_path);
    } else {
      dc = new DotContract(TYPE_DIR);
      dc.dotcontract = await DotContract.getDCFromDir(dotcontract_path);
    }
    return dc;
  }

  async emptyDC() {
    const dotcontract_json = await this.getDotContractJson();
    const config_json = await this.getConfigJson();
    await this.clear();
    let new_dc = null;
    if (this.type === TYPE_FILE) {
      new_dc = new DotContract(TYPE_FILE);
      new_dc.dotcontract = await DotContract.createDCF(
        this.getFilePath(),
        dotcontract_json,
        config_json
      );
    } else if (this.type === TYPE_DIR) {
      new_dc = new DotContract(TYPE_DIR);
      new_dc.dotcontract = await DotContract.createDCD(
        this.getDirPath(),
        dotcontract_json,
        config_json
      );
    }
    return new_dc;
  }

  static async create(
    dotcontract_path,
    dir = true,
    genesis = null,
    config = null
  ) {
    let dc = null;
    if (dir) {
      dc = new DotContract(TYPE_DIR);
      dc.dotcontract = await DotContract.createDCD(
        path.join(dotcontract_path, ".contract"),
        genesis,
        config
      );
    } else {
      dc = new DotContract(TYPE_FILE);
      dc.dotcontract = await DotContract.createDCF(
        dotcontract_path,
        genesis,
        config
      );
    }
    return dc;
  }

  async isValid() {
    return await this.dotcontract.isValid();
  }

  async commit(commit_json) {
    await this.dotcontract.commit(commit_json);
  }

  async canAppendCommitFromJson(commit_json) {
    return await this.dotcontract.contract.canAppendCommitFromJson(commit_json);
  }

  async attach(attachment) {
    await this.dotcontract.attach(attachment);
  }

  async save() {
    await this.dotcontract.save();
  }

  async getDotContractJson() {
    return await this.dotcontract.getDotContractJson();
  }

  async getConfigJson() {
    return await this.dotcontract.getConfigJson();
  }

  async getCommitLog() {
    return await this.dotcontract.getCommitLog();
  }

  async getCommitOrder() {
    return await this.dotcontract.getCommitOrder();
  }

  async copyAttachmentsToTempDir() {
    return await this.dotcontract.copyAttachmentsToTempDir();
  }

  async reCommit(commitLog, attachments_dir, start_indx, end_indx) {
    await this.dotcontract.reCommit(
      commitLog,
      attachments_dir,
      start_indx,
      end_indx
    );
  }

  async zip(filepath) {
    await this.dotcontract.zip(filepath);
  }

  static unzip(input, output, password) {
    DotContractFile.unzip(input, output, password);
  }

  async clear() {
    await this.dotcontract.clear();
  }

  getDirPath() {
    return this.dotcontract.dirpath;
  }

  getFilePath() {
    return this.dotcontract.filepath;
  }

  getKM() {
    return this.dotcontract.contract.km.toJSON();
  }

  listContents() {
    return this.dotcontract.listContents();
  }
}
