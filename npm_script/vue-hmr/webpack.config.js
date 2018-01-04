const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname + '/src/main.js'),
  output: {
    path: path.resolve(__dirname + '/dist/js'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    inline: true,  //实时刷新
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}