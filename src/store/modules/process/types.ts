export enum ActionTypes {
  processRequest = 'PROCESS_REQUEST',
  processSuccess = 'PROCESS_SUCCESS',
  processFailure = 'PROCESS_FAILURE',
}

export interface ResultObject {
  success: Record<string, any> | null;
  failure: Record<string, any> | null;
}

export interface ProcessState {
  loading: boolean;
  process: ResultObject;
}
