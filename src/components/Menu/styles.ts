import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
	horizontal: true,
	showsHorizontalScrollIndicator: false,
	contentContainerStyle: {
		paddingLeft: 16,
	},
}))`
  margin-top: 34px;
  margin-bottom: 5px;
`;

export const Option = styled.TouchableOpacity`
  width: 120px;
  height: 104px;
  background-color: #fff;
  padding: 15px; 
  margin-right: 16px;
  border-radius: 4px;

  justify-content: space-between;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  elevation: 5;
`;

export const Title = styled.Text`
  font-family: 'Montserrat_700Bold';
  font-size: 14px;
	color: #333333;
`;
