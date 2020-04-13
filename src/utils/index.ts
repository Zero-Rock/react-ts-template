/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/03/05 8:53 下午.
 */
interface Params {
  [key: string]: any;
}

export function getQueryParams(qs: string): Params {
  const params: Params = {};
  const re: RegExp = /[?&]?([^=]+)=([^&]*)/g;
  let tokens;
  if (qs) {
    qs = qs.split('+').join(' ');
    tokens = re.exec(qs);
    while (tokens) {
      params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
  }
  return params;
}

export function isPromise(fun: PromiseLike<any>) {
  return !!fun && (typeof fun === 'object' || typeof fun === 'function') && typeof fun.then === 'function';
}
