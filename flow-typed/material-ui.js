//@flow
import React from 'react';
import TextField from 'material-ui/TextField';

declare module "material-ui/TextField" {
  declare function exports(): TextField;
}

declare module "material-ui/FlatButton" {
  declare function exports(): React.Component;
}

declare module "material-ui/styles/MuiThemeProvider" {
  declare function exports(): React.Component;
}

declare module "react-tap-event-plugin" {
  declare function exports(): function;
}




