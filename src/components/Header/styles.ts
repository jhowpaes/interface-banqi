import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
`;

export const IconButton = styled.TouchableOpacity`
`;

export const HeaderTitle = styled.Text`
  font-family: 'Montserrat_700Bold';
  font-size: 14px;
	color: #EC008C;
  text-transform: uppercase;
`;
