/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/03/05 10:27 下午.
 */
const path = require( "path" );
const merge = require( "webpack-merge" );
const webpack = require( "webpack" );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const UglifyjsPlugin = require( "uglifyjs-webpack-plugin" );
const OptimizeCSSAssetsPlugin = require( "optimize-css-assets-webpack-plugin" );
const webpackBaseConfig = require( "./webpack.base.config" );
const utils = require( "./utils" );
const config = require( "../config/index" ).prod;

const webpackProdConfig = merge( webpackBaseConfig, {
  mode: "production",
  devtool: config.devtool,
  output: {
    path: path.resolve( __dirname, "../dist" ),
    filename: `${ config.assetsSubDirectort }/js/[name].[contenthash].js`,
    chunkFilename: `${ config.assetsSubDirectort }/js/[name].[contenthash].js`,
    publicPath: "/"
  },
  plugins: [
    new webpack.DefinePlugin( {
      "process.env.NODE_ENV": "\"production\""
    } ),
    new MiniCssExtractPlugin( {
      filename: `${ config.assetsSubDirectort }/css/[name].[contenthash].css`,
      chunkFilename: `${ config.assetsSubDirectort }/css/[name].[contenthash].css`
    } ),
    new HtmlWebpackPlugin( {
      template: utils.resolve( "src/index.html" ),
      filename: "index.html",
      inject: true
    } )
  ],
  optimization: {
    runtimeChunk: {
      name: "manifest"
    },
    concatenateModules: true,
    minimizer: [
      new UglifyjsPlugin( {
        uglifyOptions: {
          warnings: false
        },
        sourceMap: true,
        parallel: true,
        extractComments: true
      } ),
      new OptimizeCSSAssetsPlugin( {} )
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "vendor",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        }
      }
    }
  }
} );

module.exports = webpackProdConfig;
