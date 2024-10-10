import { Container, Title } from "./styles";

export function Button({ variant = "primary", title, ...props }) {
  return (
    <Container variant={variant} {...props}>
      <Title variant={variant}>{title}</Title>
    </Container>
  );
}

