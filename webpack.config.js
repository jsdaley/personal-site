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
  new CopyWebpackPlugin(  {
    patterns: [
      { from: 'app/favicon.ico' },
      { from: 'app/jared_daley_resume.pdf' },
    ],
  })
];

const config = {
  entry: `${APP_DIR}/application.jsx`,
  mode: PRODUCTION ? 'production' : 'development',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  optimization: {
    minimize: PRODUCTION,
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: BUILD_DIR,
    },
    compress: true,
    hot: true,
    port: 9000,
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins
};

module.exports = config;
