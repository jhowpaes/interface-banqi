import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';


import Button from '../../components/Button';

import { Container } from './styles';

const Account: React.FC = () => {
  const navigation = useNavigation()

  return (
  <Container>
    <Button 
      onPress={() => navigation.navigate('TabStack')} 
      icon={{name: 'account-balance', size: 20, color: "#fff"}}
    >
      Minha conta
    </Button>
  </Container>
  );
}

export default Account;