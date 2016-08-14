module.exports = {
  entry: './app/main.js',
  output: {
    path: './public/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {test: /\.json$/, loader: 'json-loader'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
