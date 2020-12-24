import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.SafeAreaView`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: ${getStatusBarHeight() + 15}px 15px 15px 15px;
`;

export const Title = styled.Text`
  width: 75%;
  font-size: 20px;
  font-weight: bold;
  color: #495057;
`;
