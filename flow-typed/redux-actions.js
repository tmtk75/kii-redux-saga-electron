/* @flow */
declare module "redux-actions" {
  declare type Action<T> = {
    type: string,
    payload: T,
    meta: ?Object,
    error: ?bool,
  }
  declare type Actions<T> = {
    [key: string]: (...args: Array<any>) => T,
  }
  declare function createActions<T>(actions: Actions<T>): (...args: Array<any>) => Action<T>;

  declare type Reducer<T, S> = (s: S, a: T) => S
  declare type Reducers<T, S> = {
    [key: string]: Reducer<T, S>,
  }
  declare function handleActions<T, S>(reducers: Reducers<T, S>): (s: S) => Action<T>;
}
