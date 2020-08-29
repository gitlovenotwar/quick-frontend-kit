import history from '../configureHistory';

/**
 * Creates an asynchronous middleware to map the actions
 */
export const createAsyncActions = (asyncActions = {}) => {
  return store => next => action => {
    for(let key in asyncActions) {
      if(asyncActions.hasOwnProperty(key)) {
        asyncActions[key]?.(action, store);
      }
    }
    return next(action);
  };
}

/**
 * Creates an handlers for asynchronous actions
 */
export const handleAsyncActions = (actions = {}) => {
  return async (action, store) => {
    return await actions[action.type]?.(action.payload, {...store, history});
  };
}

/**
 * Cancels previously request
 */
export const handleCancelAction = () => {
  const cancelActions = {};
  return (requestId, cancel, message = 'cancelled') => {
    cancelActions[requestId]?.(message);
    cancelActions[requestId] = cancel;
  };
}
