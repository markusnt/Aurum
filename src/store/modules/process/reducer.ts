import { Reducer } from 'redux';
import produce from 'immer';
import { ProcessState, ActionTypes } from './types';

const INITIAL_STATE: ProcessState = {
  loading: false,
  process: { success: null, failure: null },
};

const process: Reducer<ProcessState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.processRequest: {
        draft.loading = true;
        break;
      }
      case ActionTypes.processSuccess: {
        draft.loading = false;
        draft.process = { success: action.payload.response, failure: null };
        break;
      }
      case ActionTypes.processFailure: {
        draft.loading = false;
        draft.process = { success: null, failure:  action.payload.response };
        break;
      }
      default: {
        return draft;
      }
    }
  });
};
export default process;
