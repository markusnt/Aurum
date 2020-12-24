import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import { IState } from '../../store';

import { Container, Header, HeaderTitle, Content } from './styles';

import { processRequest } from '../../store/modules/process/actions';

import ProcessList from '../../components/ProcessList';
import TabNavigation from '../../components/TabNavigation';

const Main: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(processRequest());
  }, []);

  const processData = useSelector<IState, any>((state) => {
    return state.process.process?.success;
  });

  return (
    <>
      <Container>
        <Header>
          <HeaderTitle>Processos</HeaderTitle>
          <Icon name="search" size={25} color="#18ABF4" />
        </Header>

        <Content>
          <ProcessList containerData={processData?.cases} />
        </Content>
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

export default Main;
