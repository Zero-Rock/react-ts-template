/**
 * Created by 枯荣<panjiankang@cai-inc.com> on 2020/03/06 5:14 下午.
 */
const context = require.context( './', false, /\.ts$/ );

const models = context.keys()
                      .filter( (item:string) => !item.includes('.d.ts')&& item !== './index.ts' )
                      .map( (key:string) => context( key ).default );
export default models;
