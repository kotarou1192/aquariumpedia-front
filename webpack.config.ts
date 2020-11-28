import path from "path";
import webpack from "webpack";
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";

const webpackConfig: webpack.Configuration = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css"],
    alias: {
      src: path.resolve(__dirname, "src/")
    }
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /public/
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          }
        ]
      },
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "source-map-loader"
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })]
};

export default webpackConfig;
