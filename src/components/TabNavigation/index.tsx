import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useRoute, useNavigation } from '@react-navigation/native';

import { Text } from 'react-native';

import { Container, Item, TabText } from './styles';

interface Item {
  name: string;
  icon: string;
  destiny: string;
}

interface Tab extends Item {
  itemTabs: Array<Item>;
}

const TabNavigation: React.FC<Tab> = ({ itemTabs, ...rest }) => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <Container>
      {itemTabs.map((item: any) => {
        return (
          <Item onPress={() => navigation.navigate(item.destiny)}>
            <TabText
              style={{
                color: item.name === route.name ? '#18abf4' : 'white',
              }}
            >
              {item.name}
            </TabText>
            <Icon
              name={item.icon}
              size={20}
              color={item.name === route.name ? '#18abf4' : 'white'}
            />
          </Item>
        );
      })}
    </Container>
  );
};

export default TabNavigation;
