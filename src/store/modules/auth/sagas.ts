import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { IState } from '../../';
import { authRequest, authSuccess, authFailure } from './actions';
import api from '../../../services/api';
import { ActionTypes } from './types';

// Action's return
type SignUpRequest = ReturnType<typeof authRequest>;

interface SignUpResponse {
  id: number;
  quantity: number;
}

function* signUp({ payload }: SignUpRequest) {
  const { login } = payload;

  if (
    login.username === 'Candidato_mobile@aurum.com.br' &&
    login.password === 'admin'
  ) {
    yield put(authSuccess(login.username));
  } else {
    yield put(authFailure('Usuario ou Senha invalido!'));
  }

  /**
     * Caso for necessario fazer uma chamada na api, usaria essa estrutura.
     *  
     const response: AxiosResponse<SignUpResponse> = yield call(api.post, {
         username: login.username,
         password: login.password,
        });
    */

  // yield put(authSuccess('Usuario logado com sucesso!!'));
  // yield put(authFailure('Usuario ou Senha invalido!'));
}

export default all([takeLatest(ActionTypes.authRequest, signUp)]);
