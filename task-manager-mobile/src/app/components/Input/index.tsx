import { TextInput, TextInputProps } from "react-native";

import { Container } from "./styles";
import theme from "../../theme";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
}

export function Input({ inputRef, ...rest }: Props) {

  const { COLORS } = theme;

  return(
    <Container
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  )
}
