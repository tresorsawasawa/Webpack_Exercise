const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require('lodash');

 module.exports = {
   entry: {
     index: './src/index.js',
     print: './src/print.js',
   },
   plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Exercise',
      template: './src/index.html'
    }),
  ],
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist')
   },
 };