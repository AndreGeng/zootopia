import less from "rollup-plugin-less";
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
    less({
      output: "./lib/rollup.build.css"
    }),
    resolve(),
    commonjs()
  ],
  external: ["react", "react-dom", "prop-types"]
};
