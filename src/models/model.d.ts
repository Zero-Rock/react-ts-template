/**
 * Created by 枯荣<panjiankang@cai-inc.com> on 2020/03/06 5:47 下午.
 */
export interface ModelType<S, E, R> {
  namespace: string;
  state: S;
  effects?: E;
  reducers?:R;
}
