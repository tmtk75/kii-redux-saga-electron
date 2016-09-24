/* @flow */
import React from 'react';
import { connect } from 'react-redux'
import LoginForm from "./LoginForm.js"

const ReduxApp = connect(a => a)(LoginForm)

export default class App extends React.Component {
  render() {
    return <ReduxApp />
  }
}
