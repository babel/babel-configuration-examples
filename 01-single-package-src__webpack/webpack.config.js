const path = require("path");

module.exports = {
  mode: "none",

  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /.js/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
