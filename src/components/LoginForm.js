/* @flow */
import React from "react"
import { signup, signinWithAccessToken } from "../actions.js"
import TextField from "material-ui/TextField"
import FlatButton from "material-ui/FlatButton"

import type { Action } from "redux"
import type { KiiUser } from "kii-sdk"

interface Props {
  kiiSignup: KiiSignupState<KiiUser>;
  dispatch: (a: Action<KiiSignupPayload>) => mixed;
}

type State = KiiSignupPayload;

export default class LoginForm extends React.Component<void, Props, State> {

  props: Props

  state: State

  constructor(props: Props) {
    super(props);
    this.state = {username: "", password: ""}
  }

  render() {
    const { isFetching, user, error } = this.props.kiiSignup;
    return (
      <div>
        <TextField
          value={this.state.username}
          floatingLabelText="username"
          onChange={this.onChangeUsername.bind(this)}
          />
        <TextField
          type="password"
          value={this.state.password}
          floatingLabelText="password" 
          onChange={this.onChangePassword.bind(this)}
          />
        <FlatButton
          label="sign up"
          onClick={this.onClickSignup.bind(this)}
          />
        {isFetching ? <span>Fetching...</span> : null}
        {error ? error.message : null}
        <div>{user ? user._uuid : null}</div>
      </div>
    );
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(signinWithAccessToken());
  }

  onChangeUsername(e: ReactEvent): void {
    const username = e.target.value;
    this.setState({username});
  }

  onChangePassword(e: ReactEvent): void {
    const password = e.target.value;
    this.setState({password});
  }

  onClickSignup(e: ReactEvent): void {
    const { dispatch } = this.props;
    const { username, password } = this.state;
    dispatch(signup(username, password));
  }

}
