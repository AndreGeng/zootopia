import postcss from "rollup-plugin-postcss";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "./src/index.js",
  output: {
    format: "cjs",
    file: "./lib/bundle.js"
  },
  plugins: [
    babel(),
    postcss({
      extract: true
    }),
    resolve(),
    commonjs()
  ],
  external: ["react", "react-dom", "prop-types"]
};
