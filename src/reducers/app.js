import { handleActions } from 'redux-actions';
import * as appActionTypes from '../actions/appActionTypes';

const initialState = {
};

const appReducer = handleActions({
  /** 
   * 
   * [appActionTypes.<action_constant>](state, { payload }) {
   *    return {...state, ...payload};
   * }
   * 
  */
}, initialState);

export default appReducer;
