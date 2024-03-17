import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native';

import { User } from 'phosphor-react-native';

export const Header = styled(SafeAreaView)`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.BLACK };
  padding: 50px;
  padding-top: -50px;
  justify-content: center;
`;

export const Icon = styled(User).attrs(({ theme }) => ({
  size: 108,
  color: theme.COLORS.WHITE,
  padding: '40px'
}))``;
