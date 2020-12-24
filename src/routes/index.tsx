import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { IState } from '../store';
import { useSelector } from 'react-redux';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const { loading, signed } = useSelector<IState, boolean>((state) => {
    return state.auth;
  });

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
