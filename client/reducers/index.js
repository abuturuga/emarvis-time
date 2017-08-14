import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import units from './units-reducer';
import projects from './projects-reducer';


export default combineReducers({
  routing: routerReducer,
  units,
  projects
});
