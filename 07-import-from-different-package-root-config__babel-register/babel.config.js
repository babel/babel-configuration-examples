module.exports = {
  babelrcRoots: [
    // shared/ and server/ can add custom plugins using .babelrc
    "./shared",
    "./client",

    // This can also be specified using a glob pattern:
    "./*",
  ],

  plugins: [
    "@babel/plugin-transform-block-scoping"
  ],
};
