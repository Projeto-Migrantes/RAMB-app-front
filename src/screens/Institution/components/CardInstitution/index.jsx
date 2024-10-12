import { Container, TextCategory, TextDescription, TextTitle } from "./styles";

export function CardInstitution({ category, name, description, ...props }) {
  return (
    <Container {...props}>
      <TextCategory>{category}</TextCategory>
      <TextTitle>{name}</TextTitle>
      <TextDescription>{description}</TextDescription>
    </Container>
  );
}
