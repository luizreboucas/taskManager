import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`

  width: 100%;

  justify-content: center;
  align-items: center;

  padding: 5px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

