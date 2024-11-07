import { Container, Title } from "./styles";


export function ButtonLanguage({
  title,
  imgSrc: SvgIcon,
  isActive,
  ...props
}) {
  return (
    <Container {...props} isActive={isActive}>
      <SvgIcon width={24} height={24} />
      <Title>{title}</Title>
    </Container>
  );
}

