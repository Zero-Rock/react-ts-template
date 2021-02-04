/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/03/05 10:27 下午.
 */
const merge = require( "webpack-merge" );
const webpack = require( "webpack" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const webpackBaseConfig = require( "./webpack.base.config" );
const utils = require( "./utils" );
const config = require('../config').dev

const webpackDevConfig = merge( webpackBaseConfig, {
  mode: "development",
  devtool: config.devtool,
  plugins: [
    new webpack.DefinePlugin( {
      "process.env.NODE_ENV": "\"development\""
    } ),
    new HtmlWebpackPlugin( {
      template: utils.resolve( "src/index.html" ),
      filename: "index.html",
      inject: true
    } )
  ]
} );

module.exports = webpackDevConfig;
