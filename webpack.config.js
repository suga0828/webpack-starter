const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src', 'main.js'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9999,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: (chunkData) => {
      return chunkData.chunk.name === 'main' ? '[name].[hash].js' : '[name]/[name].[hash].js';
    },
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new CopyPlugin({ patterns: [{ from: 'src/assets', to: 'assets' }] }),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
  ],
  module: {
    rules: [
      { test: /\.scss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.module\.js$/, use: 'bundle-loader' },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
