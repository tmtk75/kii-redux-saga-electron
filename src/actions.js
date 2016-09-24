/* @flow */
import { createActions } from "redux-actions"
import type { KiiUser } from "kii-sdk"

export const {
  signup,
  signupSucceeded,
  signupFailed,
  signinWithAccessToken,
} = createActions({
  SIGNUP: (username: string, password: string): KiiSignupPayload => ({
    username,
    password,
  }),

  SIGNUP_SUCCEEDED: (user: KiiUser): KiiSignupSucceededPayload<KiiUser> => ({
    user,
  }),

  SIGNUP_FAILED: (err: Error): KiiSignupFailedPayload => err,

  SIGNIN_WITH_ACCESS_TOKEN: () => ({
    access_token: findAccessTokenInLocalStorage(),
  }),
});

function findAccessTokenInLocalStorage(): ?string {
  const username = localStorage.getItem("last-signedin-username");
  if (!username) {
    return null;
  }
  const e = localStorage.getItem("access_token." + username);
  if (!e) {
    return null;
  }
  return e;
}
