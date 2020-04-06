/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/03/05 9:14 下午.
 */
const path = require( "path" );
const package = require( "../package" );

const resolve = ( dir ) => {
  return path.join( __dirname, "..", dir );
};

const assetsPath = ( fileName ) => {
  const projectName = package.name;
  return path.join( __dirname, `../dist${ projectName }`, fileName );
};

module.exports = {
  resolve,
  assetsPath
};
