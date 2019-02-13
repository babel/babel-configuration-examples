"use strict";

const shared = require("../../shared/src");

const main = () => {
  // This should be an arrow function
  let name = "main"; // This should be var.

  return name;
};

console.log("\n\nHas main been transpiled?\n" + main);
console.log("\n\nHas shared been transpiled?\n" + shared);
