/**
 * Created by 枯荣<panjiankang@cai-inc.com> on 2020/03/06 10:41 上午.
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
