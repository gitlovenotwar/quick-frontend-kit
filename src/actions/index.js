import { createActions } from 'redux-actions';
import * as appActionTypes from './appActionTypes';
// import all other action types here...

export const appActions = createActions({}, ...Object.values(appActionTypes));
