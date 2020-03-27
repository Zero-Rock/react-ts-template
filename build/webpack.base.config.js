/**
 * Created by 枯荣<panjiankang@cai-inc.com> on 2020/03/05 9:13 下午.
 */
const path = require( "path" );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const utils = require( "./utils" );
const isProd = process.env.NODE_ENV === "production";
console.log( isProd );
module.exports = {
  context: path.resolve( __dirname, "../" ),
  entry: {
    app: "./src/main.tsx"
  },
  output: {
    path: path.resolve( __dirname, "../dist" ),
    filename: "js/[name].js",
    chunkFilename: "js/[id].js",
    publicPath: "/"
  },
  module: {
    rules: [ {
      test: /\.(j|t)sx?$/,
      use: "babel-loader?cacheDirectory",
      exclude: /node_modules/
    }, {
      test: /\.(css|less)$/,
      use: [ isProd ? MiniCssExtractPlugin.loader : "style-loader", "css-loader", "postcss-loader", "less-loader" ]
    } ]
  },
  resolve: {
    extensions: [ ".ts", ".tsx", ".js", ".jsx" ],
    alias: {
      src: utils.resolve( "src" )
    }
  },
};

