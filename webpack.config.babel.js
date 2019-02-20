import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MonacoWebpackPlugin from "monaco-editor-webpack-plugin";
import packagejson from "./package.json";
import { join, resolve } from "path";

const APP_DIR = resolve(__dirname, "./src");
const MONACO_DIR = resolve(__dirname, "./node_modules/monaco-editor");

module.exports = env => ({
  entry: join(__dirname, "src", "index.js"),
  output: {
    filename: "index.js",
    path: join(__dirname, "app")
  },

  watch: false,

  node: {
    fs: "empty"
  },

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: env.dev ? "inline-source-map" : false,

  resolve: {
    modules: [join(__dirname, "."), join(__dirname, "src")]
  },

  plugins: [
    new HTMLWebpackPlugin({
      title: packagejson.description,
      filename: "index.html",
      template: join(__dirname, "src", "index.html"),
      inject: "body",
      hash: true,
      debug: env.dev
    }),
    new MonacoWebpackPlugin({
      // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
      languages: ["json", "javascript", "typescript"],
      features: [
        "!contextmenu",
        // "!coreCommands",
        "!inspectTokens",
        "!iPadShowKeyboard"
        // "!quickCommand",
        // "!quickOutline"
      ]
    })
  ],

  node: {
    fs: "empty"
  },

  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules\/(?![react\-monaco\-editor]\/).*/,
        include: [
          join(__dirname, "src"),
          join(__dirname, "node_modules", "react-monaco-editor", "src")
        ],
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { useBuiltIns: "usage" }],
              "@babel/preset-react"
            ],
            plugins: [
              "@babel/plugin-syntax-dynamic-import",
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }],
              "@babel/plugin-proposal-object-rest-spread"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        include: APP_DIR,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.css$/,
        include: MONACO_DIR,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".css"]
  }
});
