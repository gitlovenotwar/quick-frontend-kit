import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import rootReducerAsyncActions from './reducers-async-actions';

// initialize the middlewares
const middlewares = [
  rootReducerAsyncActions,
];

// check for redux extension compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
