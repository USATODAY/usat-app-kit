var path            = require('path');
var paths           = require('./');
var webpack         = require('webpack');
var webpackManifest = require('../lib/webpackManifest');

module.exports = function(env) {
  var jsSrc = path.resolve(paths.sourceDirectory + '/js/');
  var jsDest = paths.publicDirectory + '/js/';
  var publicPath = 'js/';

  var webpackConfig = {
    context: jsSrc,

    plugins: [],

    resolve: {
      extensions: ['', '.js']
    },

    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader?stage=1',
          exclude: /node_modules/
        }
      ]
    }
  };

  if (env !== 'test') {
    webpackConfig.entry = {
      main: ['./main.js']
    };

    webpackConfig.output = {
      path: jsDest,
      // filename: env === 'production' ? '[name]-[hash].js' : '[name].js',
      filename: '[name].js',
      publicPath: publicPath
    };

    // Factor out common dependencies into a shared.js
    // webpackConfig.plugins.push(
    //   new webpack.optimize.CommonsChunkPlugin({
    //     name: 'shared',
        // filename: env === 'production' ? '[name]-[hash].js' : '[name].js'
      //   filename: '[name].js'
      // })
    // );
  }

  if (env === 'development') {
    webpackConfig.devtool = 'source-map';
    webpack.debug = true;
  }

  if (env === 'production') {
    webpackConfig.plugins.push(
      new webpackManifest(publicPath, 'public'),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.NoErrorsPlugin()
    );
  }

  return webpackConfig;
};
