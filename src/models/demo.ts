/**
 * Created by 枯荣<panjiankang@cai-inc.com> on 2020/03/06 5:12 下午.
 */
import { Effect } from 'dva';
import { Reducer } from 'redux';
import { ModelType } from 'src/models/model';

export interface DemoState {
  avatar?: string;
}

export interface Effects {
  getUserInfo?: Effect;
  setAvatar: Effect;
}

export interface Reducers {
  getUserInfo?: Reducer;
  setAvatar11: Reducer;
}


export interface UserModelType {
  namespace: string;
  state: DemoState;
  effects?: {
    getUserInfo: Effect;
    setAvatar: Effect;
  };
  reducers?: {
    saveUserInfo: Reducer;
  };
}

const Model: ModelType<DemoState, Effects, Reducers> = {
  namespace: 'demo',
  state: {
    avatar: '我是谁'
  },
  effects: {
    * setAvatar( { payload }, effect ) {
      console.log(effect)
      console.log(payload, Date.now())
      yield effect.put( {
        type: 'setAvatar11',
        payload: {
          avatar: payload.avatar
        }
      } );
    }
  },
  reducers: {
    setAvatar11( state, action) {
      return {
        ...state,
        ...action.payload
      };
    }
  }
};

export default Model;
