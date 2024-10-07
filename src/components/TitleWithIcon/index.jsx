import { Container, Title } from "./styles";

export function TitleWithIcon({ icon, title }) {
  return (
    <Container>
      {icon}
      <Title>{title}</Title>
    </Container>
  );
}
