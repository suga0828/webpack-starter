const path = require('path');

module.exports = {
  mode: 'development',
  target: 'web', // <=== can be omitted as default is 'web'
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] },
    ],
  },
};
