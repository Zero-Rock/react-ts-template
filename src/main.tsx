import dva, { DvaInstance, DvaOption } from 'dva';
import createLoading from 'dva-loading';
import onError from 'src/common/error';

const dvaOption: DvaOption = {
  onError
};

const app: DvaInstance = dva(dvaOption);

app.use(createLoading());

require('src/models/index').default.forEach((key: any) => app.model(key));

app.router(require('src/pages/index').default);

app.start('#app');
