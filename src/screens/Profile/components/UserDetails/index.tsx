import { Container, Info, Title } from "./styles";

export function UserDetails({ title, info }) {
  return (
    <Container>
      <Title>{title}:</Title>
      <Info>{info}</Info>
    </Container>
  );
}
