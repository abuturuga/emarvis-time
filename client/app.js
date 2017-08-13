import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { AppBar } from './components/index';
import { Provider } from 'react-redux'
import store from './store';

class App extends React.Component {

  render() {
    return(
      <Provider store={store}>
        <Router>
          <div className="app-container">
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
              <AppBar />
            </MuiThemeProvider>
          </div>
        </Router>
      </Provider>
    );
  }

}

export default App;
