/* eslint-disable @typescript-eslint/interface-name-prefix */
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import persistReducer from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import { AuthState } from './modules/auth/types';
import { ProcessState } from './modules/process/types';
import { FilterState } from './modules/filter/types';

export interface IState {
  auth: AuthState;
  process: ProcessState;
  filter: FilterState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = createStore(
  persistReducer(rootReducer),
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
