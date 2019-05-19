module.exports = {
  mode: 'development',
  entry: __dirname + "/www/index.js",
  output: {
    path: __dirname + 'www/dist',
    filename: 'bundle.js',
  },
  module: {
      rules: [{
        test: /\.js/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }, ]
      }]
    },
    // 以下追記箇所(2)
    resolve: {
      modules: [`${__dirname}/www`, 'node_modules'],
      extensions: ['.js'],
    }
  }