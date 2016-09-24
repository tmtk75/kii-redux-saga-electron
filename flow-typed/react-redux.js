/* @flow */

declare module "react-redux" {
  // https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
  declare type State = any
  declare type mapStateToProps = (s: State) => State
  declare function connect(f: mapStateToProps): function

  declare class Provider extends React.Component {}
}
