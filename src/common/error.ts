/**
 * Created by 枯荣<panjiankang@cai-inc.com> on 2020/03/05 9:09 下午.
 */
import { Dispatch, AnyAction } from 'redux';
import { routerRedux } from 'dva/router';
import { Modal } from 'antd';
import { HttpStatus } from 'src/enum/common';


export interface ErrorData {
  message: string;
}

export interface ReponseError {
  status: number;
  data: ErrorData;
}

const onError = (e: any | ReponseError, dispatch: Dispatch): void => {
  if (e.status === HttpStatus.BadRequest) {
    Modal.warning({
      title: '抱歉，系统开小差了~',
      content: e.data.message
    });
  }
  if (e.status === HttpStatus.Forbidden) {
    dispatch(routerRedux.push('/exception/403'));
  }
  if (e.status >= HttpStatus.NotFound && e.status < HttpStatus.UnprocessableEntity) {
    dispatch(routerRedux.push('/exception/404'));
  }
  if (e.status <= HttpStatus.GatewayTimeout && e.status >= HttpStatus.InternalServerError) {
    Modal.error({
      title: '服务器内部错误，无法完成请求'
    });
  }
};

export default onError;
