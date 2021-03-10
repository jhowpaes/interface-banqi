import styled from 'styled-components/native';

export const Container = styled.View`
  height: 62px;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 14px;
  padding-left: 5px;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  elevation: 5;
`;

export const TitleContainer = styled.View`
  margin-left: 12px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat_700Bold';
  font-size: 14px;
	color: #333333;
`;

export const SubTitle = styled.Text`
  font-family: 'Montserrat_500Medium';
  font-size: 12px;
	color: #333333;
`;
