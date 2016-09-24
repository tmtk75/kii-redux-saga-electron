/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import reducers from './reducers.js'
import rootSaga from "./sagas.js"
import App from './components/App.js';

const devtools = window.devToolsExtension && window.devToolsExtension()
const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(
  sagaMiddleware,
)
const store = createStore(reducers, devtools, middlewares);
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
  , document.getElementById('main')
)
