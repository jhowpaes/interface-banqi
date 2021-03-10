import React from 'react';
import { SafeAreaView } from 'react-native';
import { AntDesign, Ionicons } from "@expo/vector-icons";

import LogoBanQi from '../../assets/img/logo.png';

import Menu from '../../components/Menu';
import HomeLending from '../../components/HomeLending';
import Transactions from '../../components/Transactions';

import { 
  Container,
  HomeHeader,
  HomeHeaderMenu,
  HomeHeaderLabel,
  HomeHeaderImage,
  NotificationButton,
  HomeBalance,
  HomeBalanceTitle,
  HomeBalanceContainer,
  HomeBalanceValue,
  IconsContainer,
} from './styles';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <Container>
        <HomeHeader>
          <HomeHeaderMenu>
            <HomeHeaderLabel>
              meu
            </HomeHeaderLabel>
            <HomeHeaderImage source={LogoBanQi} width={64} height={18} />
            <AntDesign name="down" size={15} color="#EC008C" />
          </HomeHeaderMenu>
          <NotificationButton>
            <Ionicons name="notifications-outline" size={25} color="#000" />
          </NotificationButton>
        </HomeHeader>

        <HomeBalance>
          <HomeBalanceTitle>Meu saldo: </HomeBalanceTitle>
          <HomeBalanceContainer>
            <HomeBalanceValue> R$ 34,87</HomeBalanceValue>
            <IconsContainer>
              <Ionicons
                name="ios-eye-off-outline"
                size={24}
                color="#333333"
              />
            </IconsContainer>
          </HomeBalanceContainer>
        </HomeBalance>

        <Menu />
        <HomeLending />

        <Transactions />
      </Container>
    </SafeAreaView>
  );
}

export default Home;