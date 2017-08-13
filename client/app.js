import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { connect } from 'react-redux';
import { AppBar } from './components/index';
import { fetchUnits } from './actions/unit-actions';


class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUnits());
  }

  render() {
    return(
        <div className="app-container">
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <AppBar />
          </MuiThemeProvider>
        </div>
    );
  }

}

function mapPropsToState(state) {
  return {
    units: state.units,
    projects: state.projects
  };
}

App = connect(mapPropsToState)(App);
export default App;
