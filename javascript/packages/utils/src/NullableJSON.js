export const parse = function (str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    throw new Error("JSON parse error", { str });
  }
};

export const stringify = JSON.stringify;

export default {
  parse,
  stringify,
};
