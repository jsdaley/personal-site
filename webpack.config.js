const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'app');
const PRODUCTION = process.env.NODE_ENV === 'production';

const plugins = [
  new HtmlWebpackPlugin({
    template: 'app/index.html',
    filename: 'index.html',
    minify: {
      collapseWhitespace: true
    }
  }),
  new CopyWebpackPlugin([
    { from: 'app/favicon.ico' }
  ])
];

if (PRODUCTION) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: true,
    mangle: false,
    beautify: false,
    output: {
      comments: false
    }
  }));
}

const config = {
  entry: APP_DIR + '/application.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  plugins
};

module.exports = config;
