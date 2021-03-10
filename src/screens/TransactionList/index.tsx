import { useNavigation } from '@react-navigation/core';
import React from 'react';

import data from '../../../data.json';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import { formatarValor, generateUniqueKey } from '../../utils';

import { 
  Container,
  ListContainer,
  ListHeader,
  TransactionName,
  TransactionBalance,
  ListItensContainer,
} from './styles';

const TransactionList: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header title="Transações" />
      <ListContainer>
        <ListHeader>
          <TransactionName>{data.name}</TransactionName>
          <TransactionBalance>{`R$ ${formatarValor(data.balance)}`}</TransactionBalance>
        </ListHeader>
        <ListItensContainer
          data={data.transactions}
          keyExtractor={() => generateUniqueKey()}
          renderItem={({ item }) => (
            <ListItem
            onPress={() => navigation.navigate('TransactionDatails', { transaction: item })}
            key={item._id}
            data={item} />
          )}
        />
      </ListContainer>
    </Container>
  );
}

export default TransactionList;