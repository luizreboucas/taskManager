import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import theme from "../../theme";

interface StyledItemProps {
  isFirst?: boolean;
  isLast?: boolean;
  priority: number;
}

export const Container = styled(TouchableOpacity)<StyledItemProps>`
  width: 100%;
  margin-bottom: 10px;

  background-color: ${() => theme.COLORS.GRAY_500};
  
  border-radius: ${({ isFirst, isLast }) => {
    if (isFirst) return '6px 6px 0 0'; 
    if (isLast) return '0 0 6px 6px';
    return '0';
  }};

  flex-direction: row;
`;

export const SubContainer = styled.View`
  width: 100%;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: ${() => theme.FONT_SIZE.MD}px;
  color: ${() => theme.COLORS.WHITE};
  font-family: ${() => theme.FONT_FAMILY.BOLD};
  padding-bottom: 4px;
`;

export const Subtitle = styled.Text`
  font-size: ${() => theme.FONT_SIZE.SM}px;
  color: ${() => theme.COLORS.GRAY_300};
  font-family: ${() => theme.FONT_FAMILY.REGULAR};
`;

export const VerticalBar = styled.View<StyledItemProps>`
  height: 100%;
  width: 5px;
  background-color: ${({ priority }) => {
    if (priority === 1) return theme.COLORS.HIGH_PRIORITY;
    if (priority === 2) return theme.COLORS.MEDIUM_PRIORITY;
    if (priority === 3) return theme.COLORS.LOW_PRIORITY;
    
    }};
  
  border-radius: ${({ isFirst, isLast }) => {
    if (isFirst) return '6px 0 0 0'; 
    if (isLast) return '0 0 0 6px';
    return '0';
  }};
  
`
