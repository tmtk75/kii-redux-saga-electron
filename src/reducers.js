/* @flow */
import { combineReducers } from 'redux'
import { handleActions } from "redux-actions"

import type { Action } from "redux"
import type { KiiUser } from "kii-sdk"

const initialState: KiiSignupState<KiiUser> = {
  isFetching: false,
  user: null,
  error: null,
}

type P = KiiSignupSucceededPayload<KiiUser> & KiiSignupFailedPayload
type S = KiiSignupState<KiiUser>

export const kiiSignup = handleActions({
  ["SIGNUP"]: (state: S, action: Action<P>) => Object.assign({}, state, {
    isFetching: true,
    user: null,
    error: null,
  }),

  ["SIGNUP_SUCCEEDED"]: (state: S, action: Action<P>) => Object.assign({}, state, {
    isFetching: false,
    user: action.payload.user,
    error: null,
  }),

  ["SIGNUP_FAILED"]: (state: S, action: Action<P>) => Object.assign({}, state, {
    isFetching: false,
    user: null,
    error: action.payload,
  }),

  ["SIGNIN_WITH_ACCESS_TOKEN"]: (state: S, action: Action<P>) => Object.assign({}, state, {
    isFetching: true,
    user: null,
    error: null,
  }),
}, initialState)

const root: (a: mixed) => {kiiSignup: S} = combineReducers({
  kiiSignup,
})

export default root;
