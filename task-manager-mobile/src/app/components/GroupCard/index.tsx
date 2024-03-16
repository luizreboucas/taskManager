import { TouchableOpacityProps } from "react-native";
import { Container, SubContainer, Subtitle, Title, VerticalBar } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  subtitle: string;
  isFirst?: boolean;
  isLast?: boolean;
  priority: number;
}

export function GroupCard({ title, subtitle, priority, isFirst, isLast, ...rest }: Props) {
  return(
    <Container isFirst={isFirst} isLast={isLast} {...rest}>
      <VerticalBar isFirst={isFirst} isLast={isLast} priority={priority} />
      <SubContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </SubContainer>
    </Container>
  );
}
