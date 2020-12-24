import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import Details from '../pages/Details';
import Profile from '../pages/Profile';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
    initialRouteName="Main"
  >
    <App.Screen name="PROCESSOS" component={Main} />
    <App.Screen name="Details" component={Details} />
    <App.Screen name="PERFIL" component={Profile} />
  </App.Navigator>
);

export default AppRoutes;
