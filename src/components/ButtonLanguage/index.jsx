import { Container, Title } from "./styles";


export function ButtonLanguage({
  title,
  imgSrc: SvgIcon,
  isActive = false,
  ...props
}) {
  return (
    <Container {...props} isActive={isActive}>
      <SvgIcon width={24} height={24} />
      <Title isActive={isActive}>{title}</Title>
    </Container>
  );
}

