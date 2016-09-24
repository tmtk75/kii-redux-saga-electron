/* @flow */
declare module "redux-saga" {

  declare export var takeEvery:  () => any;

  declare interface SagaMiddleware {
    run(a: any): void;
  }
  declare type createSagaMiddleware = () => SagaMiddleware;
  declare export default createSagaMiddleware;
}

declare module "redux-saga/effects" {
  // Not compleated
  declare function call<T>(p: (...a: any) => Promise<T>, ...args: any): any;
  declare function put<T>(p: (...a: any) => Promise<T>, ...args: any): any;
  declare function fork(a: any): any;
}
