import { toString as uint8ArrayToString } from "uint8arrays/to-string";
import { fromString as uint8ArrayFromString } from "uint8arrays/from-string";

export { default as method_is } from "./BuiltinFunctions/method_is.js";
import method_is from "./BuiltinFunctions/method_is.js";

export { default as content_keyIsPresent } from "./BuiltinFunctions/content_keyIsPresent.js";
import content_keyIsPresent from "./BuiltinFunctions/content_keyIsPresent.js";

export { default as content_keyHasValue } from "./BuiltinFunctions/content_keyHasValue.js";
import content_keyHasValue from "./BuiltinFunctions/content_keyHasValue.js";

export { default as signed_by } from "./BuiltinFunctions/signed_by.js";
import signed_by from "./BuiltinFunctions/signed_by.js";

export const allFunctions = {
  method_is,
  content_keyIsPresent,
  content_keyHasValue,
  signed_by,
};

export function getFunction(name) {
  return allFunctions[name];
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
  allFunctions,
  getFunction,
  functionCallToPropName,
  propNameToFunctionCall,
};
