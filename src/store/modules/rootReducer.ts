import { combineReducers } from 'redux';

import auth from './auth/reducer';
import process from './process/reducer';
import filter from './filter/reducer';

export default combineReducers({
  auth,
  process,
  filter,
});
