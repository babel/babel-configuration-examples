"use strict";

const getName = () => {
  // This should be a normal function
  let name = "shared"; // This should be var (see main's babel.config.js)

  return name;
};

module.exports = getName;
