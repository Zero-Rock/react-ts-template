/**
 * Created by 枯荣<panjiankang@cai-inc.com> on 2020/03/06 9:02 上午.
 */
const webpack = require( "webpack" );
const webpackServer = require( "webpack-dev-server" );
const portFinder = require( "portfinder" );
const chalk = require( "chalk" );
const webpackDevConfig = require( "./webpack.dev.config" );
const config = require( "../config" );


portFinder.basePort = config.dev.port;
portFinder.getPort( ( error, port ) => {
  if (error) {
    console.log( chalk.red( "ERROR" ) );
    console.log( error );
    return error;
  }
  const { host } = config.dev;
  const options = {
    host,
    port,
    open: true
  };
  webpackServer.addDevServerEntrypoints( webpackDevConfig, options );
  const complier = webpack( webpackDevConfig );
  const server = new webpackServer( complier, options );
  server.listen( port, host, ( error ) => {
    if (error) {
      console.log( chalk.red( "ERROR" ) );
      console.log( error );
      process.exit( 1 );
    }
    console.log( chalk.cyan( "🌎  Starting the development server...\n" ) );
  } );
} );

console.log( process.env.NODE_ENV );
