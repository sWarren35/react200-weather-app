const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  
  return {
  plugins: [
    new webpack.DefinePlugin(envKeys)
  ],
  context: path.join(__dirname, '/src'),
  
  entry: {
    javascript: './js/index'
  },
  
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },
  
  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx'],
  },
  
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  }
  }
};
