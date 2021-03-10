import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const ListContainer = styled.View`
  flex: 1;
`;

export const ListHeader = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
`;

export const TransactionName = styled.Text`
  font-family: 'Montserrat_500Medium';
  font-size: 16px;
	color: #00B0F0;
`;

export const TransactionBalance = styled.Text`
  font-family: 'Montserrat_700Bold';
  font-size: 20px;
	color: #333333;
`;

export const ListItensContainer = styled(FlatList)`
  flex: 1
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;
