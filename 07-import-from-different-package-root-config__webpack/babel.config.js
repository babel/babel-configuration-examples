module.exports = {
  babelrcRoots: [
    // shared/ and client/ can add custom plugins using .babelrc
    "./shared",
    "./client",

    // This can also be specified using a glob pattern:
    "./*",
  ],

  plugins: [
    "@babel/plugin-transform-block-scoping"
  ],
};
