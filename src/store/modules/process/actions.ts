/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ActionTypes } from './types';

export function processRequest() {
  return {
    type: ActionTypes.processRequest,
  };
}

export function processSuccess(response: any) {
  return {
    type: ActionTypes.processSuccess,
    payload: { response },
  };
}

export function processFailure(response: any) {
  return {
    type: ActionTypes.processFailure,
    payload: { response },
  };
}
