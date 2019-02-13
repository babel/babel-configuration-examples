require("@babel/register")({
  // @babel/register ignores other packages by default.
  // We want to opt-out from this behavior.
  ignore: [],
})

require("./index");
