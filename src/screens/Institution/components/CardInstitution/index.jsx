import { Container, TextCategory, TextDescription, TextTitle } from "./styles";

export function CardInstitution({ category, name, description, ...props }) {
  const truncateDescription = (description) => {
    if (description && description.length > 200) {
      return description.substring(0, 200) + "...";
    }
    return description;
  };
  return (
    <Container {...props}>
      <TextCategory>{category}</TextCategory>
      <TextTitle>{name}</TextTitle>
      <TextDescription>{truncateDescription(description)}</TextDescription>
    </Container>
  );
}
