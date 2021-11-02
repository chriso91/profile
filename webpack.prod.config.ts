import { CleanWebpackPlugin } from "clean-webpack-plugin";
import * as path from 'path';
import { Configuration } from "webpack";
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
         test: /\.s[ac]ss$/,
         use: [
           // Creates `style` nodes from JS strings
           { loader: "style-loader" },
           // Translates CSS into CommonJS
           { loader: "css-loader", options: { modules: true }},
           // Compiles Sass to CSS
           { loader: "sass-loader" },
         ],
       },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};

export default config;
