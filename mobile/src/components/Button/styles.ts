import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  padding: 16px 0;
  background-color: #ff9000;
  border-radius: 10px;

  justify-content: center;
  align-items: center;

  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 14px;
  color: #312e38;
`;
