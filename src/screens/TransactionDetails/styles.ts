import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

export const DetailsContainer = styled.View`
  background-color: #fff;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #EC008C;
  padding: 10px;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  elevation: 5;
`;

export const DetailsDescriptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const DetailsDescription = styled.Text`
  font-family: 'Montserrat_400Regular';
  font-size: 14px;
	color: #333333;
  text-transform: uppercase;
`;

export const DatailsAmount = styled.Text`
  font-family: 'Montserrat_700Bold';
  font-size: 16px;
	color: #333333;
  text-transform: uppercase;
`;

export const AmountContainer = styled.View`

`;

export const DetailsDate = styled.Text`
  font-family: 'Montserrat_500Medium';
  font-size: 12px;
	color: #333333;
  text-transform: uppercase;
`;
