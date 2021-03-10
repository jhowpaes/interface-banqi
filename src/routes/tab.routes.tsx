import React from "react";
import { AntDesign, Ionicons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/Home";
import PurchasingScreen from "../screens/Purchasing";
import PayScreen from "../screens/Pay";
import CardScreen from "../screens/Card";
import MeatScreen from "../screens/Meat";

const Tab = createBottomTabNavigator();

const icons = {
	Home: {
		lib: AntDesign,
		name: "home",
	},
	Purchasing: {
		lib: SimpleLineIcons,
		name: "handbag",
	},
	Pay: {
		lib: Ionicons,
		name: "barcode-sharp",
	},
	Card: {
		lib: AntDesign,
		name: "creditcard",
	},
	Meat: {
		lib: Ionicons,
		name: "newspaper-outline",
	},
};

const TabNavigation: React.FC = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size, focused }) => {
					const { lib: Icon, name } = icons[route.name];
					return <Icon name={name} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				style: {
					backgroundColor: "#fff",
					borderTopColor: "rgba(255, 255, 255, 0.2)",
				},
				activeTintColor: "#EC008C",
				inactiveTintColor: "#333333",
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					title: "Início",
				}}
			/>
			<Tab.Screen
				name="Purchasing"
				component={PurchasingScreen}
				options={{
					title: "Compras",
				}}
			/>
			<Tab.Screen
				name="Pay"
				component={PayScreen}
				options={{
					title: "Pagar",
				}}
			/>
			<Tab.Screen
				name="Card"
				component={CardScreen}
				options={{
					title: "Cartões",
				}}
			/>
			<Tab.Screen
				name="Meat"
				component={MeatScreen}
				options={{
					title: "Carnês",
				}}
			/>
		</Tab.Navigator>
	);
}

export default TabNavigation;