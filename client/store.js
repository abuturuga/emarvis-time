import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import reducers from './reducers/index';

const history = createHistory(),
      historyMiddleware = routerMiddleware(history)

const middleware = compose(
  applyMiddleware(thunk),
  applyMiddleware(historyMiddleware),
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(reducers, {}, middleware);

export default store;
export {history};
