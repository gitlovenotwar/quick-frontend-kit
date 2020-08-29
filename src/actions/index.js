import { createActions } from 'redux-actions';

// import all other action types here...
import * as requestActionTypes from './requestActionTypes';
import * as appActionTypes from './appActionTypes';
import * as authActionTypes from './authActionTypes';
import * as profileActionTypes from './profileActionTypes';

// export actions
export const requestActions = createActions({}, ...Object.values(requestActionTypes));
export const appActions = createActions({}, ...Object.values(appActionTypes));
export const authActions = createActions({}, ...Object.values(authActionTypes));
export const profileActions = createActions({}, ...Object.values(profileActionTypes));
