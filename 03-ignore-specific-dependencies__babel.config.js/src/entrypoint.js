require("@babel/register")({
  // @babel/register ignore node_modules by default.
  // Let's disable this behavior and define it in babel.config.js
  ignore: [],
});

require("./index");
