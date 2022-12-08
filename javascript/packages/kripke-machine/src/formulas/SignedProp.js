export default class SignedProp {
  constructor(sign, prop) {
    this.sign = sign;
    if (prop === '*') {
      this.prop = '*';
      this.type = 'star'
    } else {
      this.prop = prop;
      this.type = 'prop';
    }
    return this;
  }

  getValue() {
    return true; // TODO
  }

  getFreeProps() {
    return new Set([this.prop]);
  }

  toText() {
    return `${this.sign ? '+' : '-'}${this.prop}`;
  }
}