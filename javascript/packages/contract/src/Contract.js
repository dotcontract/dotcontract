import Key from "@dotcontract/utils/Key";
import KripkeMachine, { Step } from "@dotcontract/kripke-machine";
import Modality, { Functions } from "@dotcontract/modality";

import Commit from "./Commit.js";

export default class Contract {
  constructor(genesis) {
    this.id = genesis?.contract_id;
    this.genesis = genesis;
    this.sign_tools = [];
    this.commits = [];
    this.km = new KripkeMachine();
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
    console.log({ signed_genesis });
    return signed_genesis;
  }

  async getContextProps(commit) {
    const r = new Set();
    // const freeProps = this.km.getFreeProps();
    // for (const fp of freeProps) {
    //   const fc = Functions.propNameToFunctionCall(fp);
    //   const ctx = {
    //     method: commit.method,
    //     content: commit.content,
    //     meta: commit.meta,
    //   };
    //   if (fc) {
    //     const passed = await fc(ctx);
    //     if (passed) {
    //       r.add(fp);
    //     }
    //   }
    // }
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
    const contextProps = await this.getContextProps(commit);
    const rule_text = commit.body.filter(i => i.method === "rule").map(i => i.value).join(' AND ');
    return this.km.canTakeStep(
      new Step(contextProps.join(" "), { rule_text })
    );
  }

  async canAppendBasicCommit(commit) {
    const contextProps = await this.getContextProps(commit);
    const step = new Step(contextProps.join(" "));
    console.log({step});
    return this.km.canTakeStep(step);
  }

  async canAppendCommit(commit) {
    if (commit.body.find(i => i.method === "rule") !== -1) {
      return this.canAppendConstrainCommit(commit);
    } else {
      return this.canAppendBasicCommit(commit);
    }
  }

  async appendConstrainCommit(commit) {
    // const [canAppendCommit, canAppendCommitError] = await this.canAppendCommit(
    //   commit
    // );
    // if (!canAppendCommit) {
    //   throw canAppendCommitError;
    // }

    // const ec = Modality.expandConstraintFunctions(commit.content);
    // const contextProps = await this.getContextProps(commit);
    // await this.km.takeStep(
    //   new Step(contextProps.join(" "), { rule_text: ec.constraint })
    // );
    this.commits.push(commit);
  }

  async appendBasicCommit(commit) {
    // const [canAppendCommit, canAppendCommitError] = await this.canAppendCommit(
    //   commit
    // );
    // if (!canAppendCommit) {
    //   throw canAppendCommitError;
    // }
    // const contextProps = await this.getContextProps(commit);
    // await this.km.takeStep({
    //   actions: [...contextProps],
    // });
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

  async prepareCommitJSON(method, path, value, meta) {
    const r = {
      body: [{ method, path, value }],
      head: {},
    };
    if (this.sign_tools?.length) {
      const signatures = meta?.signatures || {};
      for (const sign_tool of this.sign_tools) {
        const by = await sign_tool.asPublicMultiaddress();
        const signature = await sign_tool.signJSON(body);
        signatures[by] = signature;
      }
      r.head ||= {};
      r.head.signatures = signatures;
    }
    return r;
  }

  async post(path, value, meta) {
    const commit_json = await this.prepareCommitJSON("post", path, value, meta);
    return this.appendCommitFromJson(commit_json);
  }

  async canPost(path, value, meta) {
    const commit_json = await this.prepareCommitJSON("post", path, value, meta);
    return this.canAppendCommitFromJson(commit_json);
  }

  async addRule(content, meta) {
    const commit_json = await this.prepareCommitJSON("rule", content, meta);
    return this.appendCommitFromJson(commit_json);
  }

  async canAddRule(content, meta) {
    const commit_json = await this.prepareCommitJSON("rule", content, meta);
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
