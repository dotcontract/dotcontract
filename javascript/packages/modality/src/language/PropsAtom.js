import BaseFormula from "./BaseFormula.js";

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

  negated({ filterMaybe = false } = {}) {
    let props = [...this.props];
    if (filterMaybe) {
      props = [...this.props.filter((i) => !i.isMaybe())];
    }
    const pa = new PropsAtom(props.map((sa) => sa.negated()));
    return pa;
  }

  toText() {
    return `${this.props.map((sa) => sa.toText()).join(" ")}`;
  }

  toModalFormula({ filterMaybe = false } = {}) {
    let props = [...this.props];
    if (filterMaybe) {
      props = [...this.props.filter((i) => !i.isMaybe())];
    }
    return `${props
      .map((sa) => sa.toText())
      .filter((i) => !!i.length)
      .join(" ")}`;
  }
}
