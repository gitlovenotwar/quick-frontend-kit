import { combineReducers } from 'redux';
import appReducer from './app';

export default combineReducers({
  // ... add all your reducers here
  app: appReducer,
});
