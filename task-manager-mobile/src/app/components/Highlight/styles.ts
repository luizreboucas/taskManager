import styled, { css } from "styled-components/native";

import theme from "../../theme";

interface StyleProperties {
  alignItems: string;
}

export const Container = styled.View<StyleProperties>`
  width: 100%;
  margin: 32px 0;
  ${({ alignItems }) => {
    if (alignItems != null || alignItems != "") return `align-items: ${alignItems}`;
  }};
`;

export const Title = styled.Text`
  ${() => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `};
`;

export const Subtitle = styled.Text`
  text-align: center;

  ${() => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.RED};
  `};
`;
