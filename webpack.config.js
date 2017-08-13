const path = require('path'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: path.resolve(__dirname, './client/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public')
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    proxy: {
      '/api/v1.0': {
        target: 'http://localhost:3000',
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
       test: /\.scss$/,
       use: ExtractTextPlugin.extract({
         fallback: 'style-loader',
         use: ['css-loader', 'sass-loader']
       })
     }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ]
};
