import styled from 'styled-components/native';
import { TextMask } from 'react-native-masked-text';

export const Container = styled.ScrollView`
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
  padding: 20px;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #495057;
  margin: 5px 0 5px;
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  color: #adb5bd;
`;

export const Description = styled.Text`
  font-size: 15px;
  margin-bottom: 10px;
`;
export const DescriptionValue = styled(TextMask)`
  font-size: 15px;
  margin-bottom: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Column = styled.View`
  flex-direction: column;
`;

export const DayBox = styled.Text`
  background-color: #11a8f3;
  padding: 9px;
  width: 34px;
  height: 38px;
  border-radius: 10px;
  color: white;
  font-weight: bold;

  margin: 0px 10px 2px 0px;
`;

export const Mouth = styled.Text`
  color: #495057;
  font-weight: bold;
  font-size: 16px;
`;

export const Year = styled.Text`
  color: #adb5bd;
  font-size: 12px;
`;

export const DescriptionBox = styled.View`
  margin: 5px 0px 5px 16px;
  border-style: solid;
  border-left-width: 2px;
  padding: 10px 5px 10px 20px;
  border-color: #f0f3f6;
`;

export const Line = styled.View`
  border-style: solid;
  border-width: 1px;
  border-color: #f0f3f6;
`;

export const Sort = styled.TouchableOpacity`
  background-color: #11a8f3;
    border-radius: 20px;
    padding: 8px;
`;