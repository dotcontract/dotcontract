import fs from "fs";
import archiver from "archiver";

import Contract from "@dotcontract/contract";

export default class DotContractDirectory {
  constructor(path) {
    this.path = path;
    return this;
  }

  static async generate(path) {
    if (!path) {
      throw new Error();
    }
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
    const genesisJSON = await Contract.generateGenesis();
    fs.writeFileSync(
      `${path}/genesis.json`,
      JSON.stringify(genesisJSON),
      "utf-8"
    );
    return new DotContractDirectory(path);
  }

  static async mount(path) {
    const pd = new DotContractDirectory(path);
    const isValid = await pd.isValid();
    if (!isValid) {
      throw new Error("unable to mount invalid dotcontract directory");
    }
    const genesis = await pd.getGenesis();
    pd.contract = new Contract(genesis);
    const commit_log = await pd.getCommitLog();
    await pd.contract.appendCommitLog(commit_log);
    return pd;
  }

  async isValid() {
    if (!fs.existsSync(this.path)) {
      return false;
    }
    const genesis_valid = await this.isGenesisValid();
    if (!genesis_valid) {
      return false;
    }
    return true;
  }

  async isGenesisValid() {
    if (!fs.existsSync(`${this.path}/genesis.json`)) {
      return false;
    }
    // TODO
    return true;
  }

  async getGenesis() {
    const genesisFileJson = await fs.readFileSync(
      `${this.path}/genesis.json`,
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

    archive.file(`${this.path}/genesis.json`, { name: "genesis.json" });

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

  async writeCommit(commit_id, commit) {
    if (!fs.existsSync(`${this.path}/commits`)) {
      fs.mkdirSync(`${this.path}/commits`, { recursive: true });
    }
    fs.writeFileSync(
      `${this.path}/commits/${commit_id}.json`,
      JSON.stringify(commit),
      "utf-8"
    );
  }

  async commit(method, body, meta) {
    const new_commit = { method, content: body, meta };
    const commit_log = await this.getCommitLog();
    const commit_id = commit_log.length + 1; // TODO use hashes
    await this.contract.appendCommitFromJson(new_commit);
    const commit_order = await this.getCommitOrder();
    commit_order.push(commit_id);
    await this.writeCommitOrder(commit_order);
    await this.writeCommit(commit_id, new_commit);
  }
}
