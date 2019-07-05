const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'main': './www/js/main.js',
    'fn': './www/js/fn.js',
    'map': './www/js/map.js',
    'fastclick': './www/js/fastclick.js'
  },
  output: {
    path: path.resolve(__dirname, 'www/js/bundle'),
    filename: '[name].bundle.js',
  },
  devtool: 'inline-source-map',
};