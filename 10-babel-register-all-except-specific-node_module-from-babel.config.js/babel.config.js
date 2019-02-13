module.exports = {
  ignore: [
    // If you have multiple dependencies, you can use
    // /node_modules\/(?!fake-module-1|fake-module-2)/,
    /node_modules\/(?!fake-module-1)/,

    // Also functions work:
    (filename) => {
      if (!filename.includes("node_modules")) return false;
      if (filename.includes("fake-module-1")) return false;

      return true;
    }
  ],

  presets: ["@babel/preset-env"],
};
