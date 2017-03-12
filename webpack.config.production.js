var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './client/index'
  ],
  output: {
    path: path.join(__dirname, '.build/dist'),
    filename: 'bundle.js',
    publicPath: '/.build'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'client')
    },{
      test: /\.json$/,
      loader: 'json'
    },{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }
  }
};
