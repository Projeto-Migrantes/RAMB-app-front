import { Container, Title } from "./styles";

export function ButtonMenu({ icon, title, ...props }) {
  return (
    <Container {...props}>
      {icon}
      <Title>{title}</Title>
    </Container>
  );
}
