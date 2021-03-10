import { useRoute } from '@react-navigation/core';
import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import { formatarValor } from '../../utils';

import { 
  Container, 
  DetailsContainer,
  DetailsDescriptionContainer,
  DetailsDescription,
  DatailsAmount,
  AmountContainer,
  DetailsDate,
} from './styles';

const TransactionDetails: React.FC = () => {
  const route = useRoute();
  const { transaction } = route.params;

  return (
    <Container>
      <Header title="detalhes" />

      <DetailsContainer>
        <DetailsDescriptionContainer>
          <DetailsDescription>{transaction.description}</DetailsDescription>
          <DetailsDate>{new Date(transaction.date).toLocaleDateString('pt-BR')}</DetailsDate>
        </DetailsDescriptionContainer>

        <AmountContainer>
          <DatailsAmount>{`R$ ${formatarValor(transaction.amount)}`}</DatailsAmount>
        </AmountContainer>
      </DetailsContainer>
    </Container>
  );
}

export default TransactionDetails;