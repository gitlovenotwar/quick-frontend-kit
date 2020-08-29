import { handleActions } from 'redux-actions';
import * as requestActionTypes from '../actions/requestActionTypes';

const initialState = {
  status: {},
  error: {},
  errorFields: {},
};

const requestStatusReducer = handleActions(
  {
    [ requestActionTypes.SET_REQUEST_STATUS ](state, { payload }) {
      const { requestId } = payload;
      let { status, error, errorFields } = state;
      status = {...status};
      error = {...error};
      if (Array.isArray(requestId)) {
        requestId.map((id) => {
          status[id] = 'processing';
          error[id] = null;
          delete errorFields[id];
        });
      } else {
        status[requestId] = 'processing';
        error[requestId] = null;
        delete errorFields[requestId];
      }
      return { ...state, status, error, errorFields };
    },
    
    [ requestActionTypes.SET_REQUEST_STATUS_SUCCESS ](state, { payload }) {
      const { requestId } = payload;
      let { status, error, errorFields } = state;
      status = {...status};
      error = {...error};
      if (Array.isArray(requestId)) {
        requestId.map((id) => {
          status[id] = 'success';
          error[id] = null;
          delete errorFields[id];
        });
      } else {
        status[requestId] = 'success';
        error[requestId] = null;
        delete errorFields[requestId];
      }
      return { ...state, status, error, errorFields };
    },

    [ requestActionTypes.SET_REQUEST_STATUS_FAILED ](state, { payload }) {
      let { requestId, message = '' } = payload;
      let { status, error, errorFields } = state;
      let data = null;
      status = {...status};
      error = {...error};
      try {
        const { data: _data, messages } = JSON.parse(message);
        message = messages;
        data = _data;
      } catch(e) {}
      if(message === 'cancelled') {
        return state;
      }
      if (Array.isArray(requestId)) {
        requestId.map((id) => {
          status[id] = 'error';
          error[id] = message;
          errorFields[id] = data || message;
        });
      } else {
        status[requestId] = 'error';
        error[requestId] = message;
        errorFields[requestId] = data || message;
      }
      return { ...state, status, error, errorFields };
    },

    [ requestActionTypes.CLEAR_REQUEST_STATUS ](state, { payload }) {
      const { requestId } = payload;
      let { status, error, errorFields } = state;
      status = {...status};
      error = {...error};
      if (Array.isArray(requestId)) {
        requestId.map((id) => {
          delete status[id];
          delete error[id];
          delete errorFields[id];
        });
      } else {
        delete status[requestId];
        delete error[requestId];
        delete errorFields[requestId];
      }
      return { ...state, status, error, errorFields };
    },
  },
  initialState,
);

export default requestStatusReducer;
