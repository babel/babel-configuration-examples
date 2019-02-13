const path = require("path");

require("@babel/register")({
  // @babel/register ignores other packages by default.
  // We want to opt-out from this behavior.
  ignore: [],

  // The babel.config.js file is not in this directory, so we have to tell
  // Babel to search it in the parent directories.
  rootMode: "upward",

  // If you prefer, we can specify the babel.config.js file path manually:
  configFile: path.resolve(__dirname, "../../babel.config.js"),
});

require("./index");
