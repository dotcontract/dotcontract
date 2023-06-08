import Key from "@dotcontract/utils/Key";
import KripkeMachine, { Step } from "@dotcontract/kripke-machine";

import Commit from "./Commit.js";

export default class Contract {
  constructor(genesis) {
    this.id = genesis?.genesis?.contract_id;
    this.genesis = genesis;
    this.commits = [];
    this.km = KripkeMachine.createLooper();
    return this;
  }

  clone() {
    const clone = new Contract(this.genesis);
    clone.commits = this.commits.map((c) => c.clone());
    clone.km = this.km.clone();
    return clone;
  }

  static async generate() {
    const signed_genesis = await this.generateGenesis();
    return new Contract(signed_genesis);
  }

  static async generateGenesis() {
    const key = await Key.generate();
    const contract_id = await key.asPublicAddress();
    const genesis = { contract_id };
    const signed_genesis = await key.signJSONElement({ genesis }, "genesis");
    return signed_genesis;
  }

  async appendCommit(commit) {
    const props_text = "";
    const step = new Step(props_text, {
      rule_text: commit.getRulesConjoined(),
      evolution_json: commit.getEvolutionJSON(),
    });
    await this.km.takeStep(step);
    return this.commits.push(commit);
  }

  appendCommitFromJson(commit_json) {
    const commit = Commit.fromJSON(commit_json);
    return this.appendCommit(commit);
  }

  async canAppendCommit(commit) {
    const clone = this.clone();
    try {
      await clone.appendCommit(commit);
      return true;
    } catch (e) {
      return false;
    }
  }

  async canAppendCommitFromJson(commit_json) {
    const clone = this.clone();
    try {
      await clone.appendCommitFromJson(commit_json);
      return true;
    } catch (e) {
      return false;
    }
  }

  async appendCommitLog(commit_log) {
    for (const commit_json_string of commit_log) {
      const commit_json = JSON.parse(commit_json_string);
      await this.appendCommitFromJson(commit_json);
    }
    return this;
  }
}
