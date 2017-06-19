const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
  // What to name the extract
  filename: 'main.css'
})

/**
 * Need all of the following in order for babel to transpile ES6 and 2017 and scss to laod
 * npm install --save-dev sass-loader node-sass css-loader extract-text-webpack-plugin babel-core babel-loader babel-preset-es2015 babel-preset-stage-0
 */

const config = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-0']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    // Now picks up the configuration and uses it in teh test case
    extractPlugin
  ]
};

module.exports = config;