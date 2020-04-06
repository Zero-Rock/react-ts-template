/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/03/06 5:47 下午.
 */
export interface ModelType<S, E, R> {
  namespace: string;
  state: S;
  effects?: E;
  reducers?:R;
}
