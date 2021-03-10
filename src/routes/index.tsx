import React from 'react';
import { View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../screens/Account';
import PixScreen from '../screens/Pix';
import TabNavigation from './tab.routes';
import TransactionList from '../screens/TransactionList';
import TransactionDatails from '../screens/TransactionDetails';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
    >
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="TabStack" component={TabNavigation} />
      <Stack.Screen name="Pix" component={PixScreen} />
      <Stack.Screen name="TransactionList" component={TransactionList} />
      <Stack.Screen name="TransactionDatails" component={TransactionDatails} />
    </Stack.Navigator>
  );
}

export default Routes;