const path = require('path');

module.exports = {
  mode: 'development',
  entry: './www/js/main.js',
  output: {
    path: path.resolve(__dirname, 'www/js'),
    filename: 'main.bundle.js',
  },
  devtool: 'inline-source-map',
};