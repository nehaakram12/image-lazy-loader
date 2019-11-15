var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/ImageLazyLoader.jsx',
  output: {
    path: path.resolve('lib'),
    filename: 'ImageLazyLoader.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ['css-loader']
      }
    ]
  }
};
