/* @flow */
import { takeEvery } from "redux-saga"
import { call, put, fork } from "redux-saga/effects"
import { Kii, KiiSite, KiiUser } from "kii-sdk"
import { signupSucceeded, signupFailed } from "./actions.js"

import type { Action } from "redux"

function kiiSignup(username: string, password: string): Promise<{user: KiiUser} | {error: Error}> {
  const user: KiiUser = KiiUser.userWithUsername(username, password);
  return user.register()
    .then(value => ({value}))
    .catch(error => ({error}));
}

function kiiSignin(token: string): Promise<{user: KiiUser} | {error: Error}> {
  return KiiUser.authenticateWithToken(token)
    .then(value => ({value}))
    .catch(error => ({error}));
}

function *apiSaga(api, args, success, fail) {
  try {
    const { value, error } = ((yield call(api, ...args)): any);
    if (error) {
      return yield put(fail(error));
    }
    yield put(success(value));
  } catch (ex) {
    yield put(fail(new Error(ex.message)));
  }
}

function *handleKiiSignupSucceeded(action: Action<KiiSignupSucceededPayload<KiiUser>>) {
  const { user } = action.payload;
  localStorage.setItem("last-signedin-username", user.getUsername());
  localStorage.setItem("access_token." + user.getUsername(), user.getAccessToken());
}

export default function *rootSaga(): mixed {
  yield [
    takeEvery("SIGNUP", function *(action: Action<KiiSignupPayload>) {
      const { username, password } = action.payload;
      yield apiSaga(kiiSignup, [username, password], signupSucceeded, signupFailed)
    }),

    takeEvery("SIGNUP_SUCCEEDED", handleKiiSignupSucceeded),

    takeEvery("SIGNIN_WITH_ACCESS_TOKEN", function *(action: Action<KiiSigninPayload>) {
      const { access_token } = action.payload
      yield apiSaga(kiiSignin, [access_token], signupSucceeded, signupFailed)
    }),
  ]
}

Kii.initializeWithSite("25bb0b04", "029b1f5c20d395e30f8b359f442208ec", KiiSite.JP);
