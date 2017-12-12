// const name = "旅梦开发团";
// name.split("");
const add = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  return NaN;
};

module.exports = { add };