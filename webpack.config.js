// const webpack = require('webpack');
// const path = require('path');

module.exports = {
  context: __dirname + '/client',
  entry: './index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
      },
    ],
  },
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  }
};