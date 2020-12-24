import styled from 'styled-components/native';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

// export const Container = styled.ScrollView.attrs({
//   contentContainerStyle: {
//     paddingBottom: getBottomSpace(),
//   },
// })``;

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background-color: #fff;
  border-bottom-color: #f8fbfb;
  border-style: solid;
  border-bottom-width: 2px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex: 1;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  font-weight: bold;
  color: #495057;
  font-size: 30px;
  margin-left: 16px;
`;


