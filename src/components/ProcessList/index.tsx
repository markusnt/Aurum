import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text, FlatList } from 'react-native';

import { Container, Title, SubTitle, Description } from './styles';

interface FlatListReference {
  containerData: any;
}

const ProcessList: React.FC<FlatListReference> = ({
  containerData,
  ...rest
}) => {
  const navigation = useNavigation();

  const handleSelectProcess = (item: any) => {
    navigation.navigate('Details', { item });
  }

  return (
    <FlatList
      data={containerData}
      keyExtractor={(item: any) => item.id}
      style={{ width: '100%', marginBottom: 50 }}
      renderItem={({ item }) => (
        <Container onPress={() => handleSelectProcess(item)}>
          <Title>{item.title}</Title>
          <SubTitle>Número</SubTitle>
          <Description>{item.number}</Description>
        </Container>
      )}
    />
  );
};

export default ProcessList;
