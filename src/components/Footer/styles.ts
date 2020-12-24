import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.SafeAreaView`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  elevation: 10;
`;

export const Item = styled.TouchableOpacity`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 90%;
  padding: 15px;
`;

export const TabText = styled.Text`
  color: #495057;
  font-weight: bold;
  font-size: 16px;
  margin: 0px 16px;
`;

export const Line = styled.View`
  border-style: solid;
  border-width: 1px;
  border-color: #f0f3f6;
  width: 100%;
`;
