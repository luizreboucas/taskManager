import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";
import { IconProps } from "phosphor-react-native";

type Props = TouchableOpacityProps & {
  title?: string;
  iconColor?: string;
  iconSize?: number;
  icon?: React.ComponentType<IconProps>;
}


export function ButtonIcon({ title, iconColor, iconSize, icon: Icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      {Icon && <Icon color={iconColor} size={iconSize}/>}
    </Container>
  )
}
