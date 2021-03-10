import React from 'react';
import { View } from 'react-native';

import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import { Container, Option, Title, Img } from './styles';
import { useNavigation } from '@react-navigation/core';

const items = [
	{
		key: String(Math.random()),
		link: "TabStack",
		lib: MaterialIcons,
		icon: "api",
		title: "PIX",
	},
	{
		key: String(Math.random()),
    link: "TabStack",
		lib: Ionicons,
		icon: 'arrow-up',
		title: "Depositar",
	},
	{
		key: String(Math.random()),
    link: "TabStack",
		lib: Ionicons,
		icon: 'arrow-down',
		title: "Sacar",
	},
	{
		key: String(Math.random()),
    link: "TabStack",
		lib: Ionicons,
		icon: 'arrow-down',
		title: "Sacar",
	},
	{
		key: String(Math.random()),
    link: "TabStack",
		lib: Ionicons,
		icon: 'arrow-down',
		title: "Sacar",
	},
];

const Menu: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      {items.map((item) => (
				<Option 
          key={item.key} 
          onPress={() => navigation.navigate(`${item.link}`)}
        >
					{item.lib === MaterialIcons ? (
            <MaterialIcons name={item.icon} size={25} color="#EC008C" />
          ) : (
            <Ionicons name={item.icon} size={25} color="#EC008C" />
          )}
					<Title>{item.title}</Title>
				</Option>
			))}
    </Container>
  );
}

export default Menu;