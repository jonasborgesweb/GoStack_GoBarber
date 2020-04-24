import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  padding-bottom: ${Platform.OS === 'android' ? 50 : 30}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 30px 0 18px;
`;

export const BackToSignInButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-color: #232129;
  padding: 8px 0 ${8 + getBottomSpace()}px;
  margin-top: 24px;
`;

export const BackToSignInButtonText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 14px;
  color: #f4ede8;
  margin-left: 6px;
`;
