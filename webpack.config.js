const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const FallbackPost = require('fallback-port');

const port = new FallbackPost(3000);

module.exports = {
  entry: {
    demo1: "./src/pages/unitTest/"
  },
  output: {
    filename: '[name]/index.js',
    path: path.join(__dirname, "./dist/")
  },
  devServer: {
    contentBase: "./dist",
    port: port.getPort()
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      container: path.join(__dirname, "./src/container"),
      util: path.join(__dirname, "./src/util")
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: "html-loader", options: { minimize: false } }]
      },
      {
        test: /\.(png|jpe?g)/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "./img/[name].[ext]",
              limit: 10000
            }
          },
          {
            loader: "img-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {minimize: true}
          },
          {
            loader: "postcss-loader",
            options: {
              autoprefixer: {
                browsers: ["last 2 versions"]
              },
              plugins: [require("autoprefixer")]
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(js|jsx)/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    'karma-chrome-launcher',
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "demo1/index.html",
      chunks: ['demo1']
    }),
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "video/index.html",
      chunks: ['video']
    }),
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "chess/index.html",
      chunks: ['chess']
    }),
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "canvas/index.html",
      chunks: ['canvas']
    }),
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "house/index.html",
      chunks: ['house']
    }),
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "cat/index.html",
      chunks: ['cat']
    }),
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "webgl/index.html",
      chunks: ['webgl']
    }),
    new MiniCssExtractPlugin({
      filename: "[name]/index.css"
    })
  ]
};