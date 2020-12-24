export enum ActionTypes {
  authRequest = 'AUTH_REQUEST',
  authSuccess = 'AUTH_SUCCESS',
  authFailure = 'AUTH_FAILURE',
  signOut = 'SIGN_OUT',
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface ResultObject {
  success: Record<string, any> | null;
  failure: Record<string, any> | null;
}

export interface AuthState {
  loading: boolean;
  signed: boolean;
  authState: ResultObject;
}
