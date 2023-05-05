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
    this.km = KripkeMachine.createLooper();
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

  async appendCommitLog(commit_log) {
    for (const commit_json_string of commit_log) {
      const commit_json = JSON.parse(commit_json_string);
      await this.appendCommitFromJson(commit_json);
    }
    return this;
  }

  async canAppendCommit(commit) {
    const containsNewRule = commit.body.some(i => i.method === "rule");
    const containsEvolution = !!commit.head.evolution;
    const props_text = "";
    if (containsNewRule && !containsEvolution) {
      return [false, "Cannot add new rule without evolution"];
    } else if (containsNewRule) {
      const step = new Step(props_text, {
        rule_text: commit.body.filter(i => i.method === "rule").map(i => i.value).join(' AND '),
        evolution_json: commit.head.evolution,
      });
      return this.km.canTakeStep(step);
    } else if (containsEvolution) {
      const step = new Step(props_text, {
        evolution_json: commit.head.evolution,
      });
      return this.km.canTakeStep(step);
    } else {
      const step = new Step(props_text, {});
      return this.km.canTakeStep(step);
    }
  }

  async appendCommit(commit) {
    const props_text = "";
    const new_rules = commit.body.filter(i => i.method === "rule").map(i => i.value);
    const step = new Step(props_text, {
      rule_text: new_rules.length ? new_rules.join(' AND ') : null,
      evolution_json: commit.head.evolution,
    });
    await this.km.takeStep(step);
    return this.commits.push(commit);
  }

  appendCommitFromJson(commit_json) {
    const commit = Commit.fromJSON(commit_json);
    return this.appendCommit(commit);
  }

  canAppendCommitFromJson(commit_json) {
    const commit = Commit.fromJSON(commit_json);
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
}
