import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.SafeAreaView`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #495057;
  
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 16px 0 ${16 + getBottomSpace()}px;
`;

export const Item = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 50%;
`;

export const TabText = styled.Text`
  color: #18abf4;
  font-weight: bold;
  font-size: 16px;
  margin: 0px 16px;
`;
