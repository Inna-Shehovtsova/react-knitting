const HtmlWebpackPlugin = require("html-webpack-plugin");

//const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//const CopyWebpackPlugin = require("copy-webpack-plugin");


//const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const isDev = process.env.NODE_ENV === "development";
const withReport = process.env.npm_config_withReport;
require('babel-register')
module.exports = {
entry: ['@babel/polyfill', path.resolve(__dirname, "./src/index.tsx")],
  devtool:
    process.env.NODE_ENV === "production"
      ? "hidden-source-map"
      : "eval-source-map",
 
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },

  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      src: path.resolve(__dirname, "src"),
      store: path.resolve(__dirname, "src/redux/store"),
      svg: path.resolve(__dirname, "src/assets/svg"),
    },
  },

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(?:js|mjs|cjs|ts|tsx|jsx)$/,
        use: {
          loader: 'babel-loader',          
        }
      },
      {
        exclude: /\.module\.s?css$/i,
        test: /\.s?css$/i,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]___[hash:base64:5]",
                mode: "icss",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.module\.s?css$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]___[hash:base64:5]",
                mode: "local",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        generator: {
          filename: "static/[hash][ext]",
        },
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      // {
      //   loader: 'html-loader',
      //   test: /\.html$/i,
      // },
    ],
  },

  optimization: {
    minimizer: ["...", new CssMinimizerPlugin()],
  },
  output: {
    clean: true,
    environment: {
      arrowFunction: false,
    },
    filename: "[name].bundle.[chunkhash].js",
    path: path.resolve(__dirname, "./build"),
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  devServer: {
    client: {
      logging: "info",
    },
    compress: true,
    historyApiFallback: true,
    port: 8000,
  },
  plugins: [
   
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    ...(isDev
      ? [new MiniCssExtractPlugin()]
      : [
          new MiniCssExtractPlugin({
            chunkFilename: "[name].[contenthash].css",
            filename: "[name].[contenthash].css",
          }),
        ]),
    ...(withReport ? new BundleAnalyzerPlugin() : ""),
  ],
};
