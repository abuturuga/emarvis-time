import React from 'react';
import { connect } from 'react-redux';
import { AppBar, UnitsList, WorkContainer, Drawer } from './components/index';
import { fetchUnits } from './actions/unit-actions';
import Views from './views/routes';
import { HashRouter as Router } from 'react-router-dom';
import { history } from './store';


class App extends React.Component {

  componentDidMount() {
    console.log(this.props);
    this.props.dispatch(fetchUnits());
  }

  render() {
    return(
      <Router>
        <div className="app-container">
            <AppBar />
            <Drawer />
            <WorkContainer>
              <Views />
            </WorkContainer>
        </div>
      </Router>
    );
  }

}

function mapPropsToState(state) {
  return {
    units: state.units.components,
    projects: state.projects.components
  };
}

App = connect(mapPropsToState)(App);
export default App;
