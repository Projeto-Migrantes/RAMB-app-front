import { Container, Title } from "./styles";

export function ButtonLanguage({title,imgSrc, ...props }) {
  return (
    <Container{...props}>
    <img src={imgSrc} alt={altText} width={24} height={24} />
      <Title>{title}</Title>
    </Container>
  );
}