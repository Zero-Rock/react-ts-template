/**
 * Created by 枯荣<panjiankang@cai-inc.com> on 2020/03/05 10:31 下午.
 */
const chalk = require( "chalk" );
const semver = require( "semver" );
const packageConfig = require( "../package.json" );
const shell = require( "shelljs" );


function exec( cmd ) {
  return require( "child_process" ).execSync( cmd ).toString().trim();
}

const versionRequirements = [
  {
    name: "node",
    currentVersion: semver.clean( process.version ),  //使用semver插件，把版本信息转换成规定格式
    versionRequirement: packageConfig.engines.node
  }
];

if (shell.which( "npm" )) {
  versionRequirements.push( {
    name: "npm",
    currentVersion: exec( "npm --version" ),
    versionRequirement: packageConfig.engines.npm
  } );
}

function checkVersion() {
  const warnings = [];

  for (let i = 0; i < versionRequirements.length; i ++) {
    const mod = versionRequirements[ i ];
    // 如果版本号不符合package.json文件中指定的版本号，就执行warning.push...
    // 当前版本号用红色标识，要求版本号用绿色标识
    if (!semver.satisfies( mod.currentVersion, mod.versionRequirement )) {
      warnings.push( mod.name + ": " +
                     chalk.red( mod.currentVersion ) + " should be " +
                     chalk.green( mod.versionRequirement )
      );
    }
  }

  //如果为真，则打印提示用户升级新版本
  if (warnings.length) {
    console.log( "" );
    console.log( chalk.red( "To use this template, you must update following to modules:" ) );
    console.log();

    for (let i = 0; i < warnings.length; i ++) {
      const warning = warnings[ i ];
      console.log( "  " + warning );
    }

    console.log();
    process.exit( 1 );
  } else {
    console.log( "" );
    console.log( chalk.blue( "You can use this template with confidence" ) );
    console.log();
  }
};
module.exports = checkVersion;
