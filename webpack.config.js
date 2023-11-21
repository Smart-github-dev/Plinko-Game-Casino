const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./public/assets/sketch.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public/assets", to: "assets" }, // Copy the entire 'images' folder from src to images in the output directory
        { from: "public/index.html", to: "index.html" }, // Copy a specific file to the output directory
      ],
    }),
  ],
  watch: true,
};
