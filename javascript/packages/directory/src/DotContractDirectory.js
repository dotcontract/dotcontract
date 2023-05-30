import fs from "fs";
import path from "path";
import archiver from "archiver";

import Contract, { Commit, CommitAction } from "@dotcontract/contract";
import FileHash from "@dotcontract/utils/FileHash";
export default class Directory {
  constructor(path) {
    this.path = path;
    return this;
  }

  static async generate(path, genesis = null) {
    if (!path) {
      throw new Error();
    }
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
    const dotcontract_json = genesis? genesis : await Contract.generateGenesis();
    fs.writeFileSync(
      `${path}/dotcontract.json`,
      JSON.stringify(dotcontract_json),
      "utf-8"
    );
    return new Directory(path);
  }

  static async mount(path) {
    const pd = new Directory(path);
    const isValid = await pd.isValid();
    if (!isValid) {
      throw new Error("unable to mount invalid dotcontract directory");
    }
    const genesis = await pd.getDotContractJson();
    pd.contract = new Contract(genesis);
    const commit_log = await pd.getCommitLog();
    await pd.contract.appendCommitLog(commit_log);
    return pd;
  }

  async isValid() {
    if (!fs.existsSync(this.path)) {
      return false;
    }
    if (!this.isDotContractJsonValid()) {
      return false;
    }
    return true;
  }

  async isDotContractJsonValid() {
    // TODO
    return true;
  }

  async getDotContractJson() {
    const genesisFileJson = await fs.readFileSync(
      `${this.path}/dotcontract.json`,
      "utf-8"
    );
    return JSON.parse(genesisFileJson);
  }

  async getCommitOrder() {
    if (!fs.existsSync(`${this.path}/commit_order.json`)) {
      return [];
    }
    const commit_order_json = fs.readFileSync(
      `${this.path}/commit_order.json`,
      "utf-8"
    );
    return JSON.parse(commit_order_json);
  }

  async getCurrentCommitHash() {
    const commit_order = await this.getCommitOrder();
    return commit_order[commit_order.length - 1];
  }

  async writeCommitOrder(commit_order) {
    fs.writeFileSync(
      `${this.path}/commit_order.json`,
      JSON.stringify(commit_order),
      "utf-8"
    );
  }

  async getCommitLog() {
    const commit_order = await this.getCommitOrder();
    const commit_log = [];
    for (const commit_id of commit_order) {
      const commit_json = fs.readFileSync(
        `${this.path}/commits/${commit_id}.json`,
        "utf-8"
      );
      commit_log.push(commit_json);
    }
    return commit_log;
  }

  async zip(filepath, { style } = {}) {
    const output = fs.createWriteStream(filepath);
    const archive = archiver("zip", {
      zlib: { level: 9 }, // Sets the compression level.
    });
    archive.pipe(output);
    const finalize = () => {
      return new Promise((resolve, reject) => {
        // output.on("end", resolve);
        output.on("close", resolve);
        archive.on("warning", function (err) {
          console.error(err);
        });
        archive.on("error", function (err) {
          console.error(err);
          reject();
        });
        archive.finalize();
      });
    };

    archive.file(`${this.path}/dotcontract.json`, { name: "dotcontract.json" });

    if (style === "minimal") {
      return finalize();
    }

    // TODO add state
    if (style === "state_only") {
      return finalize();
    }

    if (fs.existsSync(`${this.path}/commit_order.json`)) {
      archive.file(`${this.path}/commit_order.json`, {
        name: "commit_order.json",
      });
      archive.directory(`${this.path}/commits`, "commits");
    }

    // TODO add other artifacts
    return finalize();
  }

  async writeCommit(commit_id, commit, index) {
    if (!fs.existsSync(`${this.path}/commits`)) {
      fs.mkdirSync(`${this.path}/commits`, { recursive: true });
    }
    if (!fs.existsSync(`${this.path}/ordered_commits`)) {
      fs.mkdirSync(`${this.path}/ordered_commits`, { recursive: true });
    }
    fs.writeFileSync(
      `${this.path}/commits/${commit_id}.json`,
      JSON.stringify(commit),
      "utf-8"
    );
    fs.symlinkSync(
      path.relative(
        `${this.path}/ordered_commits`,
        `${this.path}/commits/${commit_id}.json`
      ),
      `${this.path}/ordered_commits/${index}.json`
    );
  }

  async commit({ body, head }) {
    const new_commit = Commit.fromJSON({ body, head });
    const current_commit_hash = await this.getCurrentCommitHash();
    new_commit.setHead("parent", current_commit_hash);
    const commit_id = new_commit.getHash();
    await this.contract.appendCommitFromJson(new_commit.toJSON());
    const commit_order = await this.getCommitOrder();
    commit_order.push(commit_id);
    await this.writeCommitOrder(commit_order);
    await this.writeCommit(commit_id, new_commit, commit_order.length);
  }

  async attach({ path: contract_path, filepath }) {
    const attachment_hash = FileHash(filepath);
    if (!fs.existsSync(`${this.path}/attachments`)) {
      fs.mkdirSync(`${this.path}/attachments`, { recursive: true });
    }
    if (!fs.existsSync(`${this.path}/attached_files`)) {
      fs.mkdirSync(`${this.path}/attached_files`, { recursive: true });
    }
    fs.copyFileSync(filepath, `${this.path}/attachments/${attachment_hash}`);
    if (fs.existsSync(`${this.path}/attached_files${contract_path}`)) {
      fs.rmSync(`${this.path}/attached_files${contract_path}`);
    }
    if (
      !fs.existsSync(
        path.dirname(`${this.path}/attached_files${contract_path}`)
      )
    ) {
      fs.mkdirSync(
        path.dirname(`${this.path}/attached_files${contract_path}`),
        { recursive: true }
      );
    }
    fs.symlinkSync(
      path.relative(
        path.dirname(`${this.path}/attached_files${contract_path}`),
        `${this.path}/attachments/${attachment_hash}`
      ),
      `${this.path}/attached_files${contract_path}`
    );
  }
}
