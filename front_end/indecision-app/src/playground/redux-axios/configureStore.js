import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import {
  requestReducer
} from "./reducer/RequestReducer";
import {
  stateReducer
} from './reducer/StateReducer'
import thunk from 'redux-thunk';


export default () => {
  const store = createStore(
    combineReducers({
      states: stateReducer,
      requests: requestReducer
    }),
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};