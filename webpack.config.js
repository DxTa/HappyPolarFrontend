var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function isProduction() {
	return process.env.NODE_ENV === 'production';
}

var cssLoader = isProduction === true ?
  ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]') :
  "style?sourceMap!css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!sass?sourceMap";

var plugins = isProduction === true ?
    [new ExtractTextPlugin('app.css', {
      allChunks: true
    })] :
    [];

module.exports = {
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, '../api/public'),
    filename: 'bundle.js'
    // publicPath: '/static/'
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.json$/,
        loaders: [ 'json' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        loader: cssLoader
      }
      // {
      // test: /\.scss$/,
      // loaders: ['style', 'css', 'postcss', 'sass']
      // // loader: ExtractTextPlugin.extract('css!sass')
      // }
    ]
  },
  resolve: {
    extensions: [
      '',
      '.js'
    ]
  }
}
