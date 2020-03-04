const path = require('path')
const webpack = require('webpack')

// this is actually the configuration webpack uses
/**
 * [hash]
 * [chunkhash]
 * [name]
 * [id]
 * [query]
 * [contenthash]
 */

module.exports = {
  mode: 'development',
  entry: {
    myfile:'./src/engine.js',
  },
  output:{
    path: path.resolve(__dirname, 'build'),
    // filename: 'js/[name].[contenthash].js'
    filename: 'js/main.js', //  js/1.js(node module);  js/2.js(you wrote); js/3.js(node module)
    publicPath: '/assets/',  // https://server.com/assets/js/1.js
    // libraryTarget: 'var',
    // library: 'myfisrtlibrary'
  },
  devServer:{
    port: 1234,
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk: false,
    hot: true
  },
  plugins:[new webpack.HotModuleReplacementPlugin()]
}