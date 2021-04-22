const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const clientConfig = {
  mode: "development",

  devtool: "inline-source-map",

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },

  target: "web",

  entry: {
    client: "./src/client/main",
  },

  plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin({
    templateContent: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SERVE:CLIENT</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
    </html>
    `
  })],

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",

        exclude: [/node_modules/],
      },
      {
        test: /.css$/,

        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",

            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ],
  },
};

module.exports = [clientConfig, serverConfig]