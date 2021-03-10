import React from 'react';
import { MaterialIcons } from "@expo/vector-icons";

import { Container, 
  TitleContainer,
  Title,
  SubTitle, 
} from './styles';

const HomeLending: React.FC = () => {
  return (
    <Container>
      <MaterialIcons name="attach-money" size={21} color="#00B0F0" />
      <TitleContainer>
        <Title>Empréstimo pessoal</Title>
        <SubTitle>Você tem R$ 500 pré-aprovados!</SubTitle>
      </TitleContainer>
    </Container>
  );
}

export default HomeLending;