const n = (t = []) => t && t.length > 0 ? `,${t.join(",")},` : "", s = (t = "") => t ? t.split(",").slice(1, -1) : [];
export {
  n as arrayToString,
  s as stringToArray
};
