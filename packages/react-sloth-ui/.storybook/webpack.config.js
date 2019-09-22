const path = require("path");

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.pcss/,
    use: ["style-loader", "css-loader", "postcss-loader"],
    include: path.resolve(__dirname, "../src")
  });
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve("@storybook/source-loader")],
    enforce: "pre"
  });
  return config;
};
