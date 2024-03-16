import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import theme from "../../theme";

export const Container = styled(TouchableOpacity)`

  min-height: 56px;
  max-height: 56px;
  
  border-radius: 6px;

  justify-content: center;
  align-items: center;

  padding: 5px;

  background-color: ${() => theme.COLORS.GRAY_400};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

