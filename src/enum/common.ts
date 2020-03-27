/**
 * Created by 枯荣<panjiankang@cai-inc.com> on 2020/03/05 11:43 下午.
 */
export enum HttpStatus {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  UnprocessableEntity = 422,
  InternalServerError = 500,
  GatewayTimeout = 504,
}
