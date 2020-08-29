import { combineReducers } from 'redux';
import appReducer from './app';
import authReducer from './auth';
import profileReducer from './profile';
import requestStatusReducer from './request-status';

export default combineReducers({
  // ... add all your reducers here
  app: appReducer,
  auth: authReducer,
  profile: profileReducer,
  requestStatus: requestStatusReducer,
});
