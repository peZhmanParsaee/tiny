module.exports = function tiny(val) {
  if (typeof val !== "string") throw new TypeError("Tiny wants a string!");
  return val.replace(/\s/g, "");
}
