/* eslint-disable @typescript-eslint/explicit-function-return-type */
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'aurum',
      storage: AsyncStorage,
      whitelist: ['auth', 'process', 'filter'],
    },
    reducers,
  );
  return persistedReducer;
};
