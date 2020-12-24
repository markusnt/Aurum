import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Text } from 'react-native';
import { IState } from '../../store';

import { Container, Title, User } from './styles';
import TabNavigation from '../../components/TabNavigation';
import Button from '../../components/Button';

import { signOut } from '../../store/modules/auth/actions';

const Profile: React.FC = () => {
  const dispatch = useDispatch();

  const userDate = useSelector<IState, any>((state) => {
    return state.auth.authState?.success;
  });

  const handleLogout = () => {
    dispatch(signOut());
  }


  return (
    <>
      <Container>
        <Title>Usuário</Title>
        <User>{userDate}</User>
        <Button onPress={() => handleLogout()}> SAIR </Button>
      </Container>

      <TabNavigation
        itemTabs={[
          { name: 'PROCESSOS', icon: 'folder', destiny: 'PROCESSOS' },
          { name: 'PERFIL', icon: 'user', destiny: 'PERFIL' },
        ]}
      />
    </>
  );
};

export default Profile;
