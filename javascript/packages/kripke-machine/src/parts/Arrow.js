import Property from "./Property.js";
import PropertyTable from "./PropertyTable.js";

export default class Arrow {
  constructor(properties_label, target_state_id) {
    this.property_table = PropertyTable.fromText(properties_label, true);
    this.target_state_id = target_state_id;
    return this;
  }

  toJSONArray() {
    return [this.property_table.toText(), this.target_state_id];
  }

  clone() {
    const a = new Arrow(this.property_table.toText(), this.target_state_id);
    return a;
  }

  accepts(properties_text) {
    let ensure_required = true;
    if (properties_text.match(/\*/)) {
      properties_text.replace(/\+?\W\*/, "");
      ensure_required = false;
    }
    const incoming_properties = Property.arrayFromText(properties_text);
    for (const prop of incoming_properties) {
      if (this.property_table.get(prop.name) !== prop.value) {
        return {
          ok: false,
          errors: [
            `${prop.name} should be ${this.property_table.get(prop.name)}`,
          ],
        };
      }
    }
    if (!ensure_required) {
      return { ok: true };
    }
    for (const prop_name of this.property_table.keys()) {
      const prop = incoming_properties.find((p) => p.name === prop_name);
      if (!prop && this.property_table.get(prop_name)) {
        return {
          ok: false,
          errors: [
            `${prop_name} should be ${this.property_table.get(prop_name)}`,
          ],
        };
      }
    }
    return { ok: true };
  }
}
