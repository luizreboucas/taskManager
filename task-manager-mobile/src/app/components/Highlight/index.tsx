import { Container, Subtitle, Title } from "./styles";

type Props = {
  title: string;
  subtitle?: string;
  alignItems?: string;
}

export const Highlight = ({ title, subtitle, alignItems }: Props) => {
  return (
    <Container alignItems={alignItems} >
      <Title>
        {title}
      </Title>

      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  )
}
