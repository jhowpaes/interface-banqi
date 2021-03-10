import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 60px;
  background: #EC008C;
  border-radius: 12px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ButtonLabel = styled.Text`
  font-family: 'Montserrat_500Medium';
  font-size: 16px;
	color: #fff;
  margin-left: 10px;
`;
