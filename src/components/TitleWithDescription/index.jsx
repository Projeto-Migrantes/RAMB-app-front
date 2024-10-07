import { Container, Description, Title } from "./styles";

export function TitleWithDescription({ title, description }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
