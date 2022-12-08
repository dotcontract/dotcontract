export const parse = function(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    console.error("JSON parse error", {str});
    return null;
  }
}

export const stringify = JSON.stringify;

export default {
  parse,
  stringify
}