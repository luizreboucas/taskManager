import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UsersThree } from "phosphor-react-native";

import theme from "../../theme";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;

  background-color: ${ theme.COLORS.BLACK };
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(() => ({
  size: 56,
  color: theme.COLORS.GREEN_700
}))`
  align-self: center;
`;
