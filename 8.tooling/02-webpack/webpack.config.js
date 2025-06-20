const path = require('path') // ? CommonJS

// ? Export Webpack Config
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output:  { 
    path: path.resolve(__dirname, 'build', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    }]
  },
  devtool: 'source-map',
}