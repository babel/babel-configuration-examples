module.exports = {
  ignore: [
    // If you have multiple dependencies, you can use
    // /node_modules\/(?!fake-module-1|fake-module-2)/
    /node_modules\/(?!fake-module-1)/
  ],

  presets: ["@babel/preset-env"],
};
