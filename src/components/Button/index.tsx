import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { MaterialIcons } from "@expo/vector-icons";

import { Container, ButtonLabel } from './styles';

type IconProps = {
  name: string;
  size: number;
  color: string;
}

interface ButtonProps extends RectButtonProperties {
  icon?: IconProps;
}

const Button: React.FC<ButtonProps> = ({ children, icon, ...rest }) => {
  return (
  <Container {...rest}>
    {icon && <MaterialIcons name={icon.name} size={icon.size} color={icon.color} />}
    <ButtonLabel>{children}</ButtonLabel>
  </Container>
  );
}

export default Button;