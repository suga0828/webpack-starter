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
};
