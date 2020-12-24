import { Reducer } from 'redux';
import produce from 'immer';
import { AuthState, ActionTypes } from './types';

const INITIAL_STATE: AuthState = {
  loading: false,
  signed: false,
  authState: { success: null, failure: null },
};

const auth: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.authRequest: {
        draft.loading = true;
        draft.signed = false;
        break;
      }
      case ActionTypes.authSuccess: {
        draft.authState = { success: action.payload.response, failure: null };
        draft.loading = false;
        draft.signed = true;
        break;
      }
      case ActionTypes.authFailure: {
        draft.authState = { success: null, failure: action.payload.response };
        draft.loading = false;
        draft.signed = false;
        break;
      }
      case ActionTypes.signOut: {
        draft.loading = false;
        draft.signed = false;
        draft.authState = { success: null, failure: null };
        break;
      }
      default: {
        return draft;
      }
    }
  });
};
export default auth;
