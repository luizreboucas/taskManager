import styled from "styled-components/native";
import { TextInput } from "react-native";
import theme from "../../theme";

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 66px;
  max-height: 66px;

  color: ${() => theme.COLORS.WHITE};
  background-color: ${() => theme.COLORS.GRAY_700};
  font-family: ${() => theme.FONT_FAMILY.REGULAR};
  font-size: ${() => theme.FONT_SIZE.MD}px;

  border-radius: 6px;
  padding: 16px;
  margin-bottom: 10px;
`;
