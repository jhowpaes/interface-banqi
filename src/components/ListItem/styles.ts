import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 60px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemIconContainer = styled.View`
  
`;

export const ItemDescriptionContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemTitleContainer = styled.View``;

export const ItemTitle = styled.Text`
  font-family: 'Montserrat_500Medium';
  font-size: 14px;
	color: #333333;
`;

export const ItemDate = styled.Text`
  font-family: 'Montserrat_500Medium';
  font-size: 12px;
	color: #14C46F;
`;

export const ItemAmount = styled.Text`
  font-family: 'Montserrat_500Medium';
  font-size: 14px;
	color: #333333;
`;
