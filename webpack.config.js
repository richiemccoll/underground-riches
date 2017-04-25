const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve("public"),
    filename: "bundle.js"
  },
  plugins: [new ExtractTextPlugin("[name].bundle.css")],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: [["es2015", { modules: false }]]
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: "css-loader?importLoaders=1!postcss-loader"
        })
      }
    ]
  }
};
