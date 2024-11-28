import { Container, Title } from "./styles";

export function TitleWithIcon({ icon, title, variant = "primary" }) {
  return (
    <Container variant={variant}>
      {icon}
      <Title>{title}</Title>
    </Container>
  );
}
