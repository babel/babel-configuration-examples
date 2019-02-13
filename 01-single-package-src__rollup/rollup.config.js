import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js",
  output: {
    file: "lib/bundle.js",
    format: "cjs",
  },

  plugins: [
    babel()
  ],
};
