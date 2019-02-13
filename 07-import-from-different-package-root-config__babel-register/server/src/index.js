"use strict";

const shared = require("../../shared/src");

const server = () => {
  // This should be an arrow function
  let name = "server"; // This should be var.

  return name;
};

console.log("\n\nHas server been transpiled?\n" + server);
console.log("\n\nHas shared been transpiled?\n" + shared);
