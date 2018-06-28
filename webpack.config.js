module.exports = function() {
  return {
    module: {
      rules: [
        { test: /\.css/, loaders: ['style-loader', 'css-loader'] },
        { test: /\.js/, loader: 'babel-loader' }
      ],
    },
  }
}