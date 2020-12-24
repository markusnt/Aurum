import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { IState } from '../../';
import { processRequest, processSuccess, processFailure } from './actions';
import api from '../../../services/api';
import { ActionTypes } from './types';

function* process() {
  try {
    const response: AxiosResponse<any> = yield call(api.get, 'lawsuit/all');

    yield put(processSuccess(response.data));
  } catch (err) {
    yield put(processFailure('Usuario ou Senha invalido!'));
  }
}

export default all([takeLatest(ActionTypes.processRequest, process)]);
