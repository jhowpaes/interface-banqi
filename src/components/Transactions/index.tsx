import { useNavigation } from '@react-navigation/core';
import React from 'react';

import { transactions } from '../../../data.json';
import ListItem from '../ListItem';

import { 
  Container, 
  TransactionsTitle, 
  LinkContainer,
  LinkLabel, 
} from './styles';

const TransactionsList: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TransactionsTitle>Histórico de transações</TransactionsTitle>
      {transactions.slice(0, 3).map(item => 
        <ListItem
          onPress={() => navigation.navigate('TransactionDatails', { transaction: item })}
          key={item._id}
          data={item}
        />
      )}
      <LinkContainer onPress={() => navigation.navigate('TransactionList')}>
        <LinkLabel>Ver Mais</LinkLabel>
      </LinkContainer>
    </Container>
  );
}

export default TransactionsList;