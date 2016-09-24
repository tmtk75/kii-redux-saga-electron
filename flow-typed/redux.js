/* @flow */
import React from "react"

declare module "redux" {
  declare type Action<T> = {
    type: string,
    payload: T,
    meta: ?Object,
    error: ?bool,
  }
  declare type State = any
  declare type Reducer<S, A> = (s: S, action: A) => S;
  declare type Store = any
  declare type Reducers = { [key: string]: Reducer<any, any> }
  declare type Middlewares = {}
  declare class Redux {
    createStore(r: Reducer<State, Action<any>>, devtools: ?any): Store;
    combineReducers(reducers: Reducers): Reducer<any, any>;
    applyMiddleware(): Middlewares;
  }

  declare var exports: Redux
}

