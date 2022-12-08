import System from "./System";
import Rule from "./Rule";
import Solve from "../formulas/Solve";

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
    if (!this.canTakeSimpleStep(step)) {
      return false;
    }
    if (!step.hasRule()) {
      return true;
    }
    const evolution = step.getEvolution();
    return this.canEvolve(step.rule_text, evolution);
  }

  takeStep(step) {
    const km = this.clone();
    for (const sys of km.systems) {
      const r = sys.canTakeStep(step);
      if (!r) {
        throw new Error(`can't take step`);
      }
    }
    for (const sys of km.systems) {
      sys.takeStep(step);
    }
    if (!step.hasRule()) {
      this.systems = km.systems;
      return;
    }
    const evolution = step.getEvolution();
    km.canEvolve(step.rule_text, evolution);
    this.systems = km.systems;
    this.evolve(step.rule_text, evolution);
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
        console.log(rule, new_root_states, evolution.mappings);
        throw new Error("rule missing new root state");
      }
      rule.root_states = new_root_states;
    }
  }

  canEvolve(rule_text, evolution) {
    const km = this.clone();
    const new_rule = new Rule(rule_text, this.getPossibleCurrentStateIds());
    km.rules.push(new_rule);
    try {
      km.applyEvolution(evolution);
    } catch (e) {
      return false;
    }
    const r = this.satisfiesRules();
    if (!r.ok) {
      return false;
    }
    return true;
  }

  // dangerous, should only evolve by taking a step
  evolve(rule_text, evolution) {
    const new_rule = new Rule(rule_text, this.getPossibleCurrentStateIds());
    this.rules.push(new_rule);
    this.rules.map((i) => i.root_states);
    this.applyEvolution(evolution);
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
