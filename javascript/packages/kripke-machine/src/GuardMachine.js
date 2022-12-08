import { unionOfSets } from "@dotcontract/utils/sets";

import Step from "./Step.js";

function actionsToContext(actions = []) {
  const ctx = {};
  for (const action of actions) {
    ctx[action] = 1;
  }
  return ctx;
}
export default class GuardMachine {
  constructor() {
    this.constraints = [];
  }

  getFreeProps() {
    let r = new Set();
    for (const c of this.constraints) {
      r = unionOfSets(r, c.getFreeProps());
    }
    return r;
  }

  async canTakeStep({ actions, constraint }) {
    try {
      const step = new Step(actions, constraint);
      for (const c of this.constraints) {
        const accepted = await c.always_formula.getValue(
          actionsToContext(actions)
        );
        if (!accepted) {
          return [false, new Error(`Unsatisfied constraint: ${c.string}`)];
        }
      }
      return [step, null];
    } catch (e) {
      return [false, e];
    }
  }

  async takeStep({ actions, constraint }) {
    const [step, stepError] = await this.canTakeStep({ actions, constraint });
    if (!step) {
      throw stepError;
    }

    // remove constraints triggered by until
    const new_constraints = [];
    for (const c of this.constraints) {
      if (!c.until_formula) {
        new_constraints.push(c);
        continue;
      }
      const didUntilEventHappen = await c.until_formula.getValue(
        actionsToContext(actions)
      );
      if (didUntilEventHappen) {
        continue;
      }
      new_constraints.push(c);
    }
    this.constraint = new_constraints;

    // add new constraint
    if (step.constraint) {
      this.constraints.push(step.constraint);
    }
  }
}
