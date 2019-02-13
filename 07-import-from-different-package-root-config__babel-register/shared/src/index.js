"use strict";

const getName = () => {
  // This should be a normal function
  let name = "shared"; // This should be var

  return name;
};

module.exports = getName;
