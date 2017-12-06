module.exports = {
  entry: ["./array_from.js"],
  output: {
    path: __dirname + "/build",
    filename: "bundle-[hash].js"
  }
}