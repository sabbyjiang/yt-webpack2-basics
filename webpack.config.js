// Resolves the right path
const path = require('path');
const webpack = require('webpack');

const config = {
  // Entry path can be relative
  entry: './src/js/app.js',
  output: {
    // Output path has to be an absolute path because you're writing
    path: path.resolve(__dirname, 'dist'),
    
    // indicates that your js was bundled
    filename: 'bundle.js',

    // Difference from v2 is that this has to be just dist without the leading slash
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        // How does webpack know how to recognize the right file
        test: /\.css$/,

        // Webpack uses these in reverse order!
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      //..
    })
  ]
}

module.exports = config;