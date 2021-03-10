import React from 'react';
import { Ionicons } from "@expo/vector-icons";

import { formatarValor } from '../../utils';

import { 
  Container,
  Content,
  ItemIconContainer, 
  ItemDescriptionContainer,
  ItemTitleContainer,
  ItemTitle,
  ItemDate,
  ItemAmount,
} from './styles';

const ListItem: React.FC = ({data, onPress}) => {

  return (
    <Container onPress={onPress}>
      <Content>
      <ItemIconContainer>
        <Ionicons name="arrow-down" size={30} color="#333333" />
      </ItemIconContainer>
      <ItemDescriptionContainer>
        <ItemTitleContainer>
          <ItemTitle>{data.description}</ItemTitle>
          <ItemDate>{`Recebido em ${new Date(data.date).toLocaleDateString('pt-BR')}`}</ItemDate>
        </ItemTitleContainer>
        <ItemAmount>{`R$ ${formatarValor(data.amount)}`}</ItemAmount>
      </ItemDescriptionContainer>
      </Content>
    </Container>
  );
}

export default ListItem;