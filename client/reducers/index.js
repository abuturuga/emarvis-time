import { combineReducers } from 'redux'
import units from './units-reducer';
import projects from './projects-reducer';


export default combineReducers({
  units,
  projects
});
