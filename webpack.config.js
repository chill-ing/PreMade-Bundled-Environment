const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require("dotenv").config();

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "src/ts/index.ts"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images",
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'videos',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: false,
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html"
    }),
    new webpack.EnvironmentPlugin({
      PASSWORD: process.env.PASSWORD,
    })
  ]
};