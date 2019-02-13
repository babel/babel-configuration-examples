module.exports = {
  babelrcRoots: [
    // We want shared/ to be compiled using its configuration
    "../shared",
  ],

  // This plugins are applied both to client/ and to shared/.
  // If you want them only to apply to client/, you can add the
  //   "include": __dirname
  // top-level option to this config file.
  plugins: [
    "@babel/plugin-transform-block-scoping"
  ],
};
