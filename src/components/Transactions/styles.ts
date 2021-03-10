import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  height: 293px;
  margin-top: 32px;
  padding-top: 32px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const TransactionsTitle = styled.Text`
  font-family: 'Montserrat_500Medium';
  font-size: 14px;
	color: #333333;
  margin-bottom: 22px;
`;

export const LinkContainer = styled.TouchableOpacity`
  justify-content: flex-end;
  align-items: flex-end;
`;

export const LinkLabel = styled.Text`
  font-family: 'Montserrat_700Bold';
  font-size: 14px;
	color: #00AEEF;
  text-transform: uppercase;
`;