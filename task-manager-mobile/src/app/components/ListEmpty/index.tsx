import { Container } from "../Loader/styles";
import { Message } from "./styles";


type Props = {
  message: string;
}

export function ListEmpty({ message }: Props) {
  return(
    <Container>
      <Message>
        {message}
      </Message>
    </Container>
  )
}
