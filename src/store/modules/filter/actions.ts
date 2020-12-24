/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ActionTypes, Filter } from './types';

export function filterOpen() {
  return {
    type: ActionTypes.filterOpen,
  };
}

export function filterCLose() {
  return {
    type: ActionTypes.filterCLose,
  };
}

export function filterStatus(filter: Filter) {
  return {
    type: ActionTypes.filterStatus,
    payload: { filter },
  };
}
