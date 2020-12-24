import styled from 'styled-components/native';
import { Platform } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #495057;
  margin: 64px 0 24px;
  text-align: left;
  width: 100%;
  font-weight: bold;
`;

// export const Title = styled.Text`
//   color: #495057;
//   font-size: 32px;
//   font-family: 'RobotoSlab-Medium';
//   text-align: left;
//   width: 100%;
//   margin-bottom: 30px;
// `;
