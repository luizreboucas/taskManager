import styled from "styled-components/native";

export const Container = styled.View`

min-height: 56px;
max-height: 56px;
  
border-radius: 6px;

justify-content: center;
align-items: center;

margin-top: 20px;

background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.WHITE
}))``;