import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import theme from '../theme';

interface TabBarIconProperties {
  isFocused: boolean;
}

export const Icon = styled(Feather).attrs<TabBarIconProperties>(({ isFocused }) => ({
  size: 23,
  color: isFocused ? theme.COLORS.RED : theme.COLORS.GRAY_200,
}))``;
