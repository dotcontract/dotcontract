import System from "./parts/System.js";
import Rule from "./parts/Rule.js";
import Solve from "./formulas/Solve.js";

import { areSetsEqual } from "@dotcontract/utils/sets";

export default class KripkeMachine {
  constructor() {
    this.systems = [];
    this.rules = [];
  }

  static createLooper() {
    const km = new KripkeMachine();
    km.systems = [System.createLooper()];
    return km;
  }

  static fromJSON(json) {
    const km = new KripkeMachine();
    for (const systems_json of json.systems) {
      const sys = System.fromJSON(systems_json);
      km.systems.push(sys);
    }
    for (const rules_json of json.rules) {
      const rule = new Rule(rules_json.modal_formula, rules_json.root_states);
      km.rules.push(rule);
    }
    return km;
  }

  toJSON() {
    return {
      systems: this.systems.map((sys) => sys.toJSON()),
      rules: this.rules.map((rule) => rule.toJSON()),
    };
  }

  clone() {
    const km = new KripkeMachine();
    km.systems = this.systems.map((sys) => sys.clone());
    km.rules = this.rules.map((r) => r.clone());
    return km;
  }

  getPossibleCurrentStateIds() {
    const r = [];
    for (const [system_id, system] of this.systems.entries()) {
      for (const pcs of system.possible_current_state_ids) {
        r.push({ system: system_id, state: pcs });
      }
    }
    return r;
  }

  canTakeSimpleStep(step) {
    for (const sys of this.systems) {
      const r = sys.canTakeStep(step);
      if (!r) {
        return false;
      }
    }
    return true;
  }

  canTakeStep(step) {
    const km = this.clone();
    if (step.hasEarlyEvolution()) {
      const evolution = step.getEvolution();
      km.evolve(evolution, null);
    }
    if (!km.canTakeSimpleStep(step)) {
      return false;
    }
    if (!step.hasEvolution() && !step.hasRule()) {
      return true;
    }
    const evolution = step.getEvolution();
    return this.canEvolve(evolution, step.rule_text);
  }

  takeStep(step) {
    const km = this.clone();
    if (step.hasEarlyEvolution()) {
      const evolution = step.getEvolution();
      km.evolve(evolution, null);
    }
    for (const sys of km.systems) {
      const r = sys.canTakeStep(step);
      if (!r) {
        throw new Error(`can't take step`);
      }
    }
    for (const sys of km.systems) {
      sys.takeStep(step);
    }
    if (!step.hasEvolution() && !step.hasRule()) {
      this.systems = km.systems;
      return;
    }
    if (!step.hasEvolution() && step.hasRule()) {
      if (!km.satisfiesRule(step.rule_text)) {
        throw new Error("new rule not satisfied");
      }
      km.rules.push(new Rule(step.rule_text, km.getPossibleCurrentStateIds()));
      this.systems = km.systems;
      return;
    }
    const evolution = step.getEvolution();
    this.evolve(evolution, step.rule_text);
  }

  applyEvolution(evolution) {
    // move possible current states of each system
    const target_possible_current_states = [];
    for (const [source_ss_index, source_ss] of this.systems.entries()) {
      const source_all_pcs = source_ss.possible_current_state_ids;
      for (const pcs of source_all_pcs) {
        for (const target_pcs of evolution.getMappingTargets(
          source_ss_index,
          pcs
        )) {
          target_possible_current_states.push(target_pcs);
        }
      }
    }
    for (const [index, ess] of evolution.systems.entries()) {
      const pcs = target_possible_current_states
        .filter((i) => i.system === index)
        .map((i) => i.state);
      ess.possible_current_state_ids = pcs;
    }
    this.systems = evolution.systems;

    // move root states of rules
    for (const rule of this.rules) {
      const new_root_states = [];
      for (const root_state of rule.root_states) {
        const target_states = evolution.getMappingTargets(
          root_state.system,
          root_state.state
        );
        for (const target_state of target_states) {
          new_root_states.push(target_state);
        }
      }
      if (!new_root_states.length) {
        throw new Error("rule missing new root state");
      }
      rule.root_states = new_root_states;
    }
  }

  canEvolve(evolution, rule_text) {
    const km = this.clone();
    try {
      km.evolve(evolution, rule_text);
      return true;
    } catch (e) {
      return false;
    }
  }

  evolve(evolution, rule_text) {
    const km = this.clone();
    if (rule_text) {
      const new_rule = new Rule(rule_text, this.getPossibleCurrentStateIds());
      km.rules.push(new_rule);
    }
    km.applyEvolution(evolution);
    const r = km.satisfiesRules();
    if (!r.ok) {
      throw new Error(
        `new rule not satisfied: ${r.errors
          .map((i) => i.modal_formula_text)
          .join(", ")}`
      );
    }
    this.rules = km.rules;
    this.systems = km.systems;
  }

  satisfiesRules() {
    for (const rule of this.rules) {
      if (!this.satisfiesRule(rule)) {
        return { ok: false, errors: [rule] };
      }
    }
    return { ok: true };
  }

  satisfiesRule(rule) {
    for (const [system_index, system] of this.systems.entries()) {
      const r = Solve.inSystem(rule.modal_formula, system);
      const system_root_states = rule.root_states
        .filter((i) => i.system === system_index)
        .map((i) => i.state);
      const ok = areSetsEqual(r, new Set(...system_root_states));
      if (!ok) {
        return false;
      }
    }
    return true;
  }
}
