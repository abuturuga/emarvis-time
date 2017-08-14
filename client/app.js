import React from 'react';

import { connect } from 'react-redux';
import { AppBar, UnitsList, WorkContainer, Drawer } from './components/index';
import { fetchUnits } from './actions/unit-actions';


class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUnits());
  }

  render() {
    return(
        <div className="app-container">
          <AppBar />
          <Drawer />
          <WorkContainer>
            <UnitsList units={this.props.units} />
          </WorkContainer>
        </div>
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
