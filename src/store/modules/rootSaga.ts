import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import process from './process/sagas';

export default function* rootSaga() {
  return yield all([auth, process]);
}
