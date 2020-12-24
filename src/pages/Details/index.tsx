import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format, parseISO, getDate } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { TextMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from 'react-redux';

import { Text, View } from 'react-native';
import { IState } from '../../store';

import {
  Container,
  Description,
  DescriptionValue,
  Title,
  SubTitle,
  Content,
  DayBox,
  Row,
  Column,
  Mouth,
  Year,
  DescriptionBox,
  Line,
  Sort,
} from './styles';

import { filterOpen } from '../../store/modules/filter/actions';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Details: React.FC = () => {
  const route = useRoute();
  const dispatch = useDispatch();

  const { item } = route.params ?? '';

  const type = useSelector<IState, any>((state) => {
    return state.filter.filterClass;
  });

  const handleMonth = (item: any) => {
    const str = format(parseISO(item), 'MMMM', { locale: ptBR });
    const transform = str[0].toUpperCase() + str.substr(1); // Ricardo

    return transform;
  };

  const handleFilter = () => {
    dispatch(filterOpen());
  };

  const handleSort = () => {
    switch()
  }

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Title>{item.title}</Title>
          <SubTitle>Número</SubTitle>
          <Description>{item.number}</Description>
          <SubTitle>Cliente</SubTitle>
          <Description>{item.customers[0].name}</Description>
          <SubTitle>Parte</SubTitle>
          <Description>{item.customers[0].roleName}</Description>
          <SubTitle>Fórum</SubTitle>
          <Description>{item.court}</Description>
          <SubTitle>Valor</SubTitle>
          <DescriptionValue
            type="money"
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$',
              suffixUnit: '',
            }}
            value={item.amount}
          />
          <SubTitle>Anexo</SubTitle>
        </Content>

        <Line />

        <Content>
          <Row
            style={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Title>HISTÓRICO</Title>
            <Sort onPress={() => handleFilter()}>
              <Row style={{ alignItems: 'center' }}>
                <SubTitle style={{ color: '#fff' }}>
                  {type.orderBy ? 'Ordenar por descrição' : 'Ordenar por data'}
                </SubTitle>
                <Icon
                  name={type.sortBy ? 'arrow-down' : 'arrow-up'}
                  size={14}
                  color="#fff"
                />
              </Row>
            </Sort>
          </Row>

          {item.historicals.map((historic: any) => {
            return (
              <View key={historic.key}>
                <Row>
                  <DayBox>
                    {format(parseISO(historic.date), 'd', { locale: ptBR })}
                  </DayBox>
                  <Column>
                    <Mouth>{handleMonth(historic.date)}</Mouth>
                    <Year>
                      {format(parseISO(historic.date), 'yyyy', {
                        locale: ptBR,
                      })}
                    </Year>
                  </Column>
                </Row>
                <DescriptionBox>
                  <Text>{historic.description}</Text>
                </DescriptionBox>
              </View>
            );
          })}
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Details;
