import Key from "@dotcontract/utils/Key";
import GuardMachine from "@dotcontract/kripke-machine/GuardMachine";
import Modality, { Functions } from "@dotcontract/modality";

import Commit from "./Commit.js";

export default class Contract {
  constructor(genesis) {
    this.id = genesis?.contract_id;
    this.genesis = genesis;
    this.sign_tools = [];
    this.commits = [];
    this.logic_machine = new GuardMachine();
    return this;
  }

  static async generate({ network_id } = {}) {
    const signed_genesis = await this.generateGenesis({ network_id });
    return new Contract(signed_genesis);
  }

  static async generateGenesis({ network_id } = {}) {
    const key = await Key.generate();
    const contract_id = await key.asPublicAddress();
    const genesis = { network_id: network_id || null, contract_id };
    const signed_genesis = await key.signJSONElement({ genesis }, "genesis");
    console.log({signed_genesis});
    return signed_genesis;
  }

  async getContextProps(commit) {
    const r = new Set();
    const freeProps = this.logic_machine.getFreeProps();
    for (const fp of freeProps) {
      const fc = Functions.propNameToFunctionCall(fp);
      const ctx = {
        method: commit.method,
        content: commit.content,
        meta: commit.meta,
      };
      if (fc) {
        const passed = await fc(ctx);
        if (passed) {
          r.add(fp);
        }
      }
    }
    return Array.from(r);
  }

  static async fromCommitLog(commit_log) {
    const c = new Contract();
    for (const commit_json of commit_log) {
      await c.appendCommitFromJson(commit_json);
    }
    return c;
  }

  async appendCommitLog(commit_log) {
    for (const commit_json_string of commit_log) {
      const commit_json = JSON.parse(commit_json_string);
      await this.appendCommitFromJson(commit_json);
    }
    return this;
  }

  async toCommitLog() {
    const commit_log = [];
    for (const commit of this.commits) {
      commit_log.push(commit);
    }
    return commit_log;
  }

  async toNetworkCommitLog() {
    const r = [];
    r.push({
      contract_id: this.id,
    });
    const cl = await this.toCommitLog();
    for (const commit of cl) {
      r.push({
        contract_id: this.id,
        ...commit,
      });
    }
    return r;
  }

  async canAppendConstrainCommit(commit) {
    const ec = Modality.expandConstraintFunctions(commit.content);
    const contextProps = await this.getContextProps(commit);

    return this.logic_machine.canTakeStep({
      actions: ["%", ...contextProps],
      constraint: ec.constraint,
    });
  }

  async canAppendBasicCommit(commit) {
    const contextProps = await this.getContextProps(commit);
    return this.logic_machine.canTakeStep({ actions: [...contextProps] });
  }

  async canAppendCommit(commit) {
    if (commit.method === "constrain") {
      return this.canAppendConstrainCommit(commit);
    } else {
      return this.canAppendBasicCommit(commit);
    }
  }

  async appendConstrainCommit(commit) {
    const [canAppendCommit, canAppendCommitError] = await this.canAppendCommit(
      commit
    );
    if (!canAppendCommit) {
      throw canAppendCommitError;
    }

    const ec = Modality.expandConstraintFunctions(commit.content);
    const contextProps = await this.getContextProps(commit);
    await this.logic_machine.takeStep({
      actions: ["%", ...contextProps],
      constraint: ec.constraint,
    });
    this.commits.push(commit);
  }

  async appendBasicCommit(commit) {
    const [canAppendCommit, canAppendCommitError] = await this.canAppendCommit(
      commit
    );
    if (!canAppendCommit) {
      throw canAppendCommitError;
    }
    const contextProps = await this.getContextProps(commit);
    await this.logic_machine.takeStep({
      actions: [...contextProps],
    });
    this.commits.push(commit);
  }

  async appendCommit(commit) {
    if (commit.method === "constrain") {
      return this.appendConstrainCommit(commit);
    } else {
      return this.appendBasicCommit(commit);
    }
  }

  appendCommitFromJson(commit_json) {
    const commit = new Commit(commit_json);
    return this.appendCommit(commit);
  }

  canAppendCommitFromJson(commit_json) {
    const commit = new Commit(commit_json);
    return this.canAppendCommit(commit);
  }

  async prepareCommitJSON(method, content, meta) {
    const r = {
      method,
      content,
      meta,
    };
    if (this.sign_tools?.length) {
      const simple_commit = { method, content };
      const signatures = meta?.signatures || {};
      for (const sign_tool of this.sign_tools) {
        const by = await sign_tool.asPublicMultiaddress();
        const signature = await sign_tool.signJSON(simple_commit);
        signatures[by] = signature;
      }
      r.meta ||= {};
      r.meta.signatures = signatures;
    }
    return r;
  }

  async post(content, meta) {
    const commit_json = await this.prepareCommitJSON("post", content, meta);
    return this.appendCommitFromJson(commit_json);
  }

  async canPost(content, meta) {
    const commit_json = await this.prepareCommitJSON("post", content, meta);
    return this.canAppendCommitFromJson(commit_json);
  }

  async constrain(content, meta) {
    const commit_json = await this.prepareCommitJSON(
      "constrain",
      content,
      meta
    );
    return this.appendCommitFromJson(commit_json);
  }

  async canConstrain(content, meta) {
    const commit_json = await this.prepareCommitJSON(
      "constrain",
      content,
      meta
    );
    return this.canAppendCommitFromJson(commit_json);
  }

  startSigningCommitsWith(sign_tool) {
    this.sign_tools = [...(this.sign_tools || []), sign_tool];
  }

  stopSigningCommits() {
    this.sign_tools = [];
  }

  startSigningCommitsWithOnly(sign_tool) {
    this.sign_tools = [sign_tool];
  }
}
