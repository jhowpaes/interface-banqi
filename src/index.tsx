import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_700Bold,
	Montserrat_400Regular,
	Montserrat_500Medium,
} from '@expo-google-fonts/montserrat';

import Routes from './routes';


const App: React.FC = () => {
	const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
		Montserrat_400Regular,
		Montserrat_500Medium,
  });

	if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
			<StatusBar barStyle="dark-content" backgroundColor="#fff" />
			<NavigationContainer>
				<Routes />
			</NavigationContainer>
		</>
  );
}

export default App;