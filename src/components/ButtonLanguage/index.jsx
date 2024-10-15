import { Container, Title } from "./styles";

export function ButtonLanguage({title, ...props }) {
  return (
    <Container{...props}>
      <Title>{title}</Title>
    </Container>
  );
}

