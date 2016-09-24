"use strict"

var webpack = require("webpack"),
    path    = require("path");

function isProduction() { return process.env.NODE_ENV === "production" }
var NullPlugin = {apply: function() {/* NOP */}}

module.exports = {

  entry: {
    app: ["babel-polyfill", "./src/entry.js"],
  },

  resolve: {
    root: ".",
    extensions: ["", ".js"],
    modulesDirectories: ["node_modules", "."],
  },

  externals: {
    "kii-sdk": "__kii__",
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: isProduction() ? `bundle.[name].min.js` : `bundle.[name].js`,
    publicPath: '/',
    //chunkFilename: "[chunkhash].js",
  },

  module: {
    loaders: [
      { test: /(\.js)$/, loader: 'babel?cacheDirectory', exclude: /node_modules/ },
      { test: /\.styl$/, loader: 'style!css!stylus' },
    ],
  },

  target: "electron",

  plugins: [
    isProduction() ? new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}) : NullPlugin,
  ],

  debug: !isProduction(),

  devtool: isProduction() ? "cheap-module-source-map" : "source-map",
}
