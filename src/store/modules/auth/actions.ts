/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { LoginRequest, ActionTypes } from './types';

export function authRequest(login: LoginRequest) {
  return {
    type: ActionTypes.authRequest,
    payload: { login },
  };
}

export function authSuccess(response: any) {
  return {
    type: ActionTypes.authSuccess,
    payload: { response },
  };
}

export function authFailure(response: any) {
  return {
    type: ActionTypes.authFailure,
    payload: { response },
  };
}

export function signOut() {
  return {
    type: ActionTypes.signOut,
  };
}
