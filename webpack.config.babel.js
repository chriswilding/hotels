import ExtractTextWebpackPlugin from "extract-text-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

const extractSass = new ExtractTextWebpackPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
})

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
        use: extractSass.extract({
          use: [
            { loader: "css-loader" },
            { loader: "sass-loader" }
          ],
          fallback: "style-loader",
        })
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
    extractSass
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
