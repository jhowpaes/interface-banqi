import React from 'react';
import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from '@react-navigation/core';

import { Container, IconButton, HeaderTitle } from './styles';

const Header: React.FC = ({title}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <IconButton onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={20} color="#EC008C" />
      </IconButton>
      <HeaderTitle>
        {title}
      </HeaderTitle>
    </Container>
  );
}

export default Header;