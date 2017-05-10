var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, './src');
var BUILD_DIR = path.resolve(__dirname, './public/js');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    app: APP_DIR + '/main.js',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    publicPath: '/js/',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 9090,
    hot: true,
    stats: { colors: true },
    historyApiFallback: true,
  },
};
