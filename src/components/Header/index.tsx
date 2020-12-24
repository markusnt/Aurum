import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Text } from 'react-native';

import { Container, Title } from './styles';

const Header: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Icon name="arrow-left" size={20} color="#18abf4" onPress={() => navigation.goBack()}/>
      <Title>PROCESSO</Title>
      <Icon name="paperclip" size={20} color="#18abf4" />
    </Container>
  );
};

export default Header;
