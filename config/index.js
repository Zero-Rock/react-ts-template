/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/03/06 10:41 上午.
 */
const PKG = require( "../package" );
module.exports = {
  dev: {
    port: 3000,
    host: "localhost",
    source: 'cheap-module-eval-source-map'
  },
  prod: {
    productionSourceMap: true,
    devtool: '#source-map',
    assetsSubDirectort: PKG.name
  }
};
