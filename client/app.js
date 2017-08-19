import React from 'react';
import { connect } from 'react-redux';
import { fetchUnits } from './actions/unit-actions';
import Views from './views/routes';
import { HashRouter as Router } from 'react-router-dom';
import { history } from './store';
import { Header,  Aside, WorkContainer } from './components/index';


class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUnits());
  }

  render() {
    return(
      <Router>
        <div className="app-container">
            <Header />
            <Aside />
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
