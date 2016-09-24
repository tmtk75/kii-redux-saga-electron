/* @flow */
type ReactEvent = {
  target: {
    value: any,
  },
}

type AsyncFetch = {
  isFetching: bool;
  error: ?Error;
}

type KiiSignupState<T> = {user: ?T} & AsyncFetch

type KiiSignupPayload = {
  username: string,
  password: string,
}

type KiiSigninPayload = {
  access_token: string,
}

type KiiSignupSucceededPayload<T> = {
  user: T,
}

type KiiSignupFailedPayload = Error
