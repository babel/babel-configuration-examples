"use strict";

const shared = require("../../shared/src");

const client = () => {
  // This should be an arrow function
  let name = "client"; // This should be var.

  return name;
};

console.log("\n\nHas client been transpiled?\n" + client);
console.log("\n\nHas shared been transpiled?\n" + shared);
