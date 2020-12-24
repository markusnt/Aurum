import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from 'react-redux';

import { Text } from 'react-native';
import { IState } from '../../store';

import { Container, Item, TabText, Line } from './styles';

import { filterCLose, filterStatus } from '../../store/modules/filter/actions';

const Footer: React.FC = () => {
  const dispatch = useDispatch();

  const show = useSelector<IState, boolean>((state) => {
    return state.filter.filterShow;
  });

  const type = useSelector<IState, any>((state) => {
    return state.filter.filterClass;
  });

  const [order, setOrder] = useState(0);
  const [sort, setSort] = useState(0);

  useEffect(() => {
    const filterCase = { sortBy: sort, orderBy: order };
    
    dispatch(filterStatus(filterCase));
  }, [order, sort]);

  if (show) {
    return (
      <Container>
        <Icon
          name="arrow-down"
          size={22}
          color="#18abf4"
          onPress={() => dispatch(filterCLose())}
        />
        <Item onPress={() => setOrder(0)}>
          {type.orderBy === 0 ? (
            <Icon name="check" size={22} color="#18abf4" />
          ) : null}
          <TabText>Ordenar por data</TabText>
        </Item>
        <Item onPress={() => setOrder(1)}>
          {type.orderBy === 1 ? (
            <Icon name="check" size={22} color="#18abf4" />
          ) : null}
          <TabText>Ordenar por Descrição</TabText>
        </Item>
        <Line />
        <Item onPress={() => setSort(0)}>
          {type.sortBy === 0 ? (
            <Icon name="check" size={22} color="#18abf4" />
          ) : null}
          <TabText>Crescente</TabText>
        </Item>
        <Item onPress={() => setSort(1)}>
          {type.sortBy === 1 ? (
            <Icon name="check" size={22} color="#18abf4" />
          ) : null}
          <TabText>Decrescente</TabText>
        </Item>
      </Container>
    );
  }

  return null;
};

export default Footer;
