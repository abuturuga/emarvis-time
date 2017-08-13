import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const middleware = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(reducers, {}, middleware);
export default store;
