import { createStore, compose, applyMiddleware } from 'redux'
import reducers from './reducers/index';

const middleware = compose(
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(reducers, {}, middleware);
export default store;
