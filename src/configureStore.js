import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import sagas from './sagas';

// initialize the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [ sagaMiddleware ];

// check for redux extension compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// check for local dev in client to add logger middleware
// it will log the action and payload and the state after the action
if (process.env.DEVELOPMENT) {
  const logger = store => next => action => {
    console.group(action.type);
    console.log('payload:', action.payload);
    let result = next(action);
    console.log('state:', store.getState());
    console.groupEnd();
    return result;
  };
  middlewares.unshift(logger);
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);

export default store;
