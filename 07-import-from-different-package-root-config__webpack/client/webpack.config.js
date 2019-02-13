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

        options: {
          // The babel.config.js file is not in this directory, so we have to tell
          // Babel to search it in the parent directories.
          rootMode: "upward",

          // If you prefer, you can specify the babel.config.js file path manually:
          configFile: path.resolve(__dirname, "../babel.config.js"),
        },
      },
    ],
  },
};
