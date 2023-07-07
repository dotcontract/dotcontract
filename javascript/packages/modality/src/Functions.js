import { toString as uint8ArrayToString } from "uint8arrays/to-string";
import { fromString as uint8ArrayFromString } from "uint8arrays/from-string";

export { default as signed_by } from "./functions/signed_by.js";
import signed_by from "./functions/signed_by.js";

export { default as affect } from "./functions/affect.js";
import affect from "./functions/affect.js";

export { default as change } from "./functions/change.js";
import change from "./functions/change.js";

export const allFunctions = {
  affect,
  change,
  // include_signature_of,
};

export function getFunction(name) {
  return allFunctions[name];
}

export function escapeArgs(...args) {
  const arg_suffix = uint8ArrayFromString(JSON.stringify(args || [])).join("_");
  return `${arg_suffix}`;
}

export function unescapeArgs(args) {
  const arg_bytes = args.split("_").map((i) => parseInt(i));
  const str = uint8ArrayToString(new Uint8Array(arg_bytes));
  return str;
}

export function functionCallToPropName(name, args) {
  const arg_suffix = uint8ArrayFromString(JSON.stringify(args || [])).join("_");
  return `${name}__${arg_suffix}`;
}

export function propNameToFunctionCall(propName) {
  const m = propName.match(/^([a-zA-Z][a-zA-Z0-9_]*)__([0-9_]*)$/);
  if (!m) {
    null;
  }
  const name = m[1];
  if (!allFunctions[name]) {
    return null;
  }
  const func = getFunction(name);
  const arg_suffix = m[2];
  const arg_bytes = arg_suffix.split("_").map((i) => parseInt(i));
  const args_string = uint8ArrayToString(new Uint8Array(arg_bytes));
  const args = JSON.parse(args_string);
  return (ctx) => {
    return func(ctx, ...args);
  };
}

export default {
  list: allFunctions,
  allFunctions,
  getFunction,
  functionCallToPropName,
  propNameToFunctionCall,
  escapeArgs,
  unescapeArgs,
};
