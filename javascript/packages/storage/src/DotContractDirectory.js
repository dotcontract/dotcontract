import fs from "fs";
import fse from "fs-extra";
import { pipeline } from "stream/promises";
import path from "path";
import archiver from "archiver";
import Contract, { Commit, CommitAction, Route } from "@dotcontract/contract";
import FileHash from "@dotcontract/utils/FileHash";
import JSONFile from "@dotcontract/utils/JSONFile";

import temp from "temp";
temp.track();

export default class DotContractDirectory {
  constructor(path = null) {
    this.contract = null;
    if (path == null) {
      const temp_dir = temp.mkdirSync();
      this.dirpath = temp_dir;
    } else {
      this.dirpath = path;
    }
    return this;
  }

  async save() {
    // dummy function
    return;
  }

  async clone(path = null) {
    if (!path) {
      path = temp.mkdirSync();
    }
    fs.cpSync(this.dirpath, path, { recursive: true });
    return new DotContractDirectory(path);
  }

  async set_contract(genesis) {
    this.contract = new Contract(genesis);
    const commit_log = await this.getCommitLog();
    await this.contract.appendCommitLog(commit_log);
  }

  async mount() {
    const isValid = await this.isValid();
    if (!isValid) {
      throw new Error("unable to mount invalid dotcontract directory");
    }
    const genesis = await this.getDotContractJson();
    await this.set_contract(genesis);
  }

  static async fromDir(dirpath) {
    const pd = new DotContractDirectory(dirpath);
    await pd.mount();
    return pd;
  }

  async generate(genesis = null, config = null) {
    if (fs.existsSync(this.dirpath)) {
      fs.rmSync(this.dirpath, { recursive: true });
    }
    fs.mkdirSync(this.dirpath, { recursive: true });
    const dotcontract_json = genesis
      ? genesis
      : await Contract.generateGenesis();
    this.contract = new Contract(dotcontract_json);
    const config_json = config ? config : await Contract.generateConfig();
    fs.writeFileSync(
      `${this.dirpath}/dotcontract.json`,
      JSON.stringify(dotcontract_json),
      "utf-8"
    );
    fs.writeFileSync(
      `${this.dirpath}/config.json`,
      JSON.stringify(config_json),
      "utf-8"
    );
  }

  async isValid() {
    if (!fs.existsSync(this.dirpath)) {
      return false;
    }
    if (!(await this.isDotContractJsonValid())) {
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
      `${this.dirpath}/dotcontract.json`,
      "utf-8"
    );
    return JSON.parse(genesisFileJson);
  }

  async getConfigJson() {
    const configFileJson = await fs.readFileSync(
      `${this.dirpath}/config.json`,
      "utf-8"
    );
    return JSON.parse(configFileJson);
  }

  async getCommitOrder() {
    const dir = await this.activeDir();
    if (!fs.existsSync(`${dir}/commit_order.json`)) {
      return [];
    }
    const commit_order_json = fs.readFileSync(
      `${dir}/commit_order.json`,
      "utf-8"
    );
    return JSON.parse(commit_order_json);
  }

  async getCurrentCommitHash() {
    const commit_order = await this.getCommitOrder();
    return commit_order[commit_order.length - 1];
  }

  async getMainCommitOrder() {
    if (!fs.existsSync(`${this.dirpath}/commit_order.json`)) {
      return [];
    }
    const commit_order_json = fs.readFileSync(
      `${this.dirpath}/commit_order.json`,
      "utf-8"
    );
    return JSON.parse(commit_order_json);
  }

  async getMainCurrentCommitHash() {
    const commit_order = await this.getMainCommitOrder();
    return commit_order[commit_order.length - 1];
  }

  async writeCommitOrder(commit_order) {
    const dir = await this.activeDir();
    fs.writeFileSync(
      `${dir}/commit_order.json`,
      JSON.stringify(commit_order),
      "utf-8"
    );
  }

  async getCommitLog() {
    const commit_order = await this.getCommitOrder();
    const commit_log = [];
    const possible_dirs = [`${this.dirpath}`];
    const draft = await this.activeDraft();
    if (draft) {
      possible_dirs.push(`${this.dirpath}/drafts/${draft}`);
    }
    for (const commit_id of commit_order) {
      let found = false;
      for (const dir of possible_dirs) {
        if (found) {
          continue;
        }
        const f = `${dir}/commits/${commit_id}.json`;
        if (fs.existsSync(f)) {
          const commit_json = fs.readFileSync(f, "utf-8");
          commit_log.push(commit_json);
          found = true;
        }
      }
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

    archive.file(`${this.dirpath}/dotcontract.json`, {
      name: "dotcontract.json",
    });
    archive.file(`${this.dirpath}/config.json`, { name: "config.json" });

    if (style === "minimal") {
      return finalize();
    }

    // TODO add state
    if (style === "state_only") {
      return finalize();
    }

    if (fs.existsSync(`${this.dirpath}/commit_order.json`)) {
      archive.file(`${this.dirpath}/commit_order.json`, {
        name: "commit_order.json",
      });
      archive.directory(`${this.dirpath}/commits`, "commits");
    }
    if (fs.existsSync(`${this.dirpath}/attachments`)) {
      archive.directory(`${this.dirpath}/attachments`, "attachments");
    }

    // TODO add other artifacts
    return finalize();
  }

  async writeCommit(commit_id, commit, index) {
    const dir = await this.activeDir();
    if (!fs.existsSync(`${dir}/commits`)) {
      fs.mkdirSync(`${dir}/commits`, { recursive: true });
    }
    if (!fs.existsSync(`${dir}/ordered_commits`)) {
      fs.mkdirSync(`${dir}/ordered_commits`, { recursive: true });
    }
    fs.writeFileSync(
      `${dir}/commits/${commit_id}.json`,
      JSON.stringify(commit),
      "utf-8"
    );
    fs.symlinkSync(
      path.relative(
        `${dir}/ordered_commits`,
        `${dir}/commits/${commit_id}.json`
      ),
      `${dir}/ordered_commits/${index}.json`
    );
    for (const el of (commit.body || []).filter((i) => i.method === "post")) {
      const subpath = el.path.split("/").slice(0, -1).join("/");
      if (!fs.existsSync(`${dir}/../${subpath}`)) {
        fs.mkdirSync(`${dir}/../${subpath}`, { recursive: true });
      }
      if (Route.isPrimitive(el.path)) {
        fs.writeFileSync(`${dir}/../${el.path}`, el.value);
      } else if (Route.isAttachment(el.path)) {
        const attachment_hash = el.value.replace("attachment://", "");
        fs.copyFileSync(
          `${dir}/attachments/${attachment_hash}`,
          `${dir}/../${el.path}`
        );
      }
    }
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
    const dir = await this.activeDir();
    if (!fs.existsSync(`${dir}/attachments`)) {
      fs.mkdirSync(`${dir}/attachments`, { recursive: true });
    }
    if (!fs.existsSync(`${dir}/attached_files`)) {
      fs.mkdirSync(`${dir}/attached_files`, { recursive: true });
    }
    fs.copyFileSync(filepath, `${dir}/attachments/${attachment_hash}`);
    if (fs.existsSync(`${dir}/attached_files${contract_path}`)) {
      fs.rmSync(`${dir}/attached_files${contract_path}`);
    }
    if (!fs.existsSync(path.dirname(`${dir}/attached_files${contract_path}`))) {
      fs.mkdirSync(path.dirname(`${dir}/attached_files${contract_path}`), {
        recursive: true,
      });
    }
    fs.symlinkSync(
      path.relative(
        path.dirname(`${dir}/attached_files${contract_path}`),
        `${dir}/attachments/${attachment_hash}`
      ),
      `${dir}/attached_files${contract_path}`
    );
  }

  async hasAttachments() {
    return fs.existsSync(`${this.dirpath}/attachments`);
  }

  async copyAttachmentsToDir(target_dir) {
    fs.cpSync(`${this.dirpath}/attachments`, target_dir, { recursive: true });
  }

  async copyAttachmentsToTempDir() {
    let attachments_dir = null;
    if (await this.hasAttachments()) {
      attachments_dir = temp.mkdirSync();
      await this.copyAttachmentsToDir(attachments_dir);
    }
    return attachments_dir;
  }

  async listContents() {
    const contents_dir = `${this.dirpath}/..`;
    if (!fs.existsSync(contents_dir)) {
      return [];
    }
    const f = fs
      .readdirSync(contents_dir, { recursive: true })
      .filter((f) => !f.match(/^\.contract/));
    const r = [];
    for (const p of f) {
      const path = `/${p}`;
      r.push({
        path,
        value: await this.getPathValue(path),
        type: await this.getPathType(path),
      });
    }
    return r.filter((i) => i.type);
  }

  async getPathType(path) {
    if (Route.isPrimitive(path)) {
      return "primitive";
    } else if (Route.isAttachment(path)) {
      return "attachment";
    }
    return null;
  }

  async extractPath(path, { output }) {
    const read_stream = fs.createReadStream(`${this.dirpath}/../${path}`);
    return pipeline(read_stream, output, {});
  }

  async getPathValue(path) {
    if (Route.isPrimitive(path)) {
      return fs.readFileSync(`${this.dirpath}/../${path}`);
    } else if (Route.isAttachment(path)) {
      const attachment_hash = FileHash(`${this.dirpath}/../${path}`);
      return `attachment://${attachment_hash}`;
    }
    return null;
  }

  async clear() {
    fs.rmSync(`${this.dirpath}`, { recursive: true });
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

  async cleanPathValues() {
    const commit_log = await this.getCommitLog();
    for (const commit of commit_log) {
      const contents = [];
      const c = Commit.fromJSONString(commit);
      for (const part of c.body) {
        const ca = new CommitAction(part);
        if (ca.hasAttachment()) {
          const file_hash = ca.getFileHash();
          const path = ca.getPath();
          const filepath = `${this.dirpath}/attachments/${file_hash}`;
          contents.push({
            path,
            filepath,
          });
        } else if (ca.method === "post") {
          const path = ca.getPath();
          const value = ca.value;
          contents.push({
            path,
            value,
          });
        }
      }
      for (const content of contents) {
        fse.ensureFileSync(`${this.dirpath}/..${content.path}`);
        if (content.filepath) {
          fs.copyFileSync(
            content.filepath,
            `${this.dirpath}/..${content.path}`
          );
        } else {
          fs.writeFileSync(
            `${this.dirpath}/..${content.path}`,
            content.value,
            "utf-8"
          );
        }
      }
    }
  }

  async createDraft(name) {
    if (!name.match(/[a-zA-Z0-9\-_]+/)) {
      throw new Error("invalid draft name");
    }
    if (fs.existsSync(`${this.dirpath}/drafts/${name}`)) {
      throw new Error("draft already exists");
    }
    fs.mkdirSync(`${this.dirpath}/drafts/${name}/commits`, { recursive: true });
    const hash = await this.getMainCurrentCommitHash();
    fs.writeFileSync(
      `${this.dirpath}/drafts/${name}/commit_order.json`,
      JSON.stringify(hash ? [hash] : [])
    );
  }

  async deleteAllDrafts() {
    if (fs.existsSync(`${this.dirpath}/drafts`)) {
      fs.rmSync(`${this.dirpath}/drafts`, { recursive: true });
    }
  }

  async deleteDraft(name) {
    if (!name.match(/[a-zA-Z0-9\-_]+/)) {
      throw new Error("invalid draft name");
    }
    if (fs.existsSync(`${this.dirpath}/drafts/${name}`)) {
      fs.rmSync(`${this.dirpath}/drafts/${name}`, { recursive: true });
    }
  }

  async listDrafts() {
    if (!fs.existsSync(`${this.dirpath}/drafts`)) {
      return [];
    }
    const dirs = fs.readdirSync(`${this.dirpath}/drafts`);
    return dirs;
  }

  async checkoutDraft(name) {
    if (!name.match(/[a-zA-Z0-9\-_]+/)) {
      throw new Error("invalid draft name");
    }
    if (fs.existsSync(`${this.dirpath}/drafts/${name}`)) {
      JSONFile.writeOrPatchObjectSync(`${this.dirpath}/local.json`, {
        draft: name,
      });
    }
  }

  async activeDraft() {
    const local = JSONFile.readSyncOrReturnDefault(
      `${this.dirpath}/local.json`,
      {}
    );
    return local.draft;
  }

  async activeDir() {
    const draft = await this.activeDraft();
    return draft ? `${this.dirpath}/drafts/${draft}` : this.dirpath;
  }

  async checkoutLocal() {
    JSONFile.writeOrPatchObjectSync(`${this.dirpath}/local.json`, {
      draft: null,
    });
  }
}
