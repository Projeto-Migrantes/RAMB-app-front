import { Container, Title } from "./styles";


export function ButtonLanguage({
  title,
  imgSrc: SvgIcon,
  accessibilityLabel,
  ...props
}) {
  return (
    <Container {...props}>
      <SvgIcon width={24} height={24} accessibilityLabel={accessibilityLabel} />
      <Title>{title}</Title>
    </Container>
  );
}

