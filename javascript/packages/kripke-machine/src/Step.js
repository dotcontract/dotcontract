import Constraint from "./Constraint.js";

export default class Step {
  constructor(actions, constraint = null) {
    if (!Array.isArray(actions)) {
      throw new Error("Step actions must be an array.");
    }
    if (constraint && actions.indexOf("%") === -1) {
      throw new Error(
        "To include a constraint, the mod action ('%') must be present."
      );
    }
    this.actions = actions;
    if (typeof constraint === "string") {
      constraint = new Constraint(constraint, true);
    }
    this.constraint = constraint;
    return this;
  }
}
