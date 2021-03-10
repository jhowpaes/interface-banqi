import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const HomeContent = styled.View`
  margin-left: 20px;
  margin-right: 20px;
`;

export const HomeHeader = styled.View`
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 18px;
  margin-right: 18px;
`;

export const HomeHeaderMenu = styled.View`
  flex-direction: row;
`;

export const HomeHeaderLabel = styled.Text`
  font-family: 'Montserrat_700Bold';
  font-size: 16px;
	color: #EC008C;
  padding-right: 5px;
`;

export const HomeHeaderImage = styled.Image`
  margin-right: 5px;
`;

export const NotificationButton = styled.TouchableWithoutFeedback`
  
`;

export const HomeBalance = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomeBalanceTitle = styled.Text`
  font-family: 'Montserrat_500Medium';
  font-size: 14px;
	color: #333333;
`;

export const HomeBalanceContainer = styled.View`
  flex-direction: row;
  align-items: center; 
  justify-content: center;
`;

export const HomeBalanceValue = styled.Text`
  font-family: 'Montserrat_700Bold';
  font-size: 20px;
	color: #333333;
  margin-right: 5px;
`;

export const IconsContainer = styled.View``;
