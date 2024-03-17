import { BackButton, BackIcon, Container } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false, ...rest }: Props) {

  return(
    <Container>
      {
        showBackButton &&
        <BackButton {...rest} >
          <BackIcon />
        </BackButton>
      }
      {/* <Logo source={logoImg}/> */}
    </Container>
  )
}
