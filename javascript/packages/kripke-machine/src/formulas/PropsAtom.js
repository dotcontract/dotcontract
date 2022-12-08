import BaseFormula from "./BaseFormula";

export default class PropsAtom extends BaseFormula {
  constructor(signed_props) {
    super();
    this.props = signed_props;
  }

  getValue(ctx) {
    return true; // TODO
  }

  getFreeVars() {
    return new Set(this.props.map((i) => i.props).filter((i) => i === "*"));
  }

  getBoundVars() {
    return new Set();
  }

  toText() {
    return `${this.props
      .map((sa) => sa.toText())
      .join(" ")}`;
  }
}
