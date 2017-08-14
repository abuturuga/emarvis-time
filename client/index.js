import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import store from './store';
import App from './app';
import './styles/style.scss';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>, document.querySelector('#app-root'));
