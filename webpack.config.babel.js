import ExtractTextPlugin from "extract-text-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

export default {
  entry: "./src/index.jsx",
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel-loader",
        test: /\.(js|jsx)$/
      },
      {
        test: /\.scss/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: "body",
      template: "./public/index.html"
    }),
    new ExtractTextPlugin({
      filename: "[name].[contenthash].css",
      disable: process.env.NODE_ENV === "development"
  })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
