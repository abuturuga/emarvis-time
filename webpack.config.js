const path = require('path');

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
      }
    ]
  }

};
