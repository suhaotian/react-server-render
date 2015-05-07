var webpack = require('webpack');
module.exports = {
  entry: './script.jsx',
  output: {
    filename: './public/js/bundle.js'
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loader:'jsx-loader?harmony'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin('common.js',['a','b'])
  // ]
};