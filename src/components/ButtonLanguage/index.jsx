import { Container, Title } from "./styles";
import { Image, StyleSheet } from "react-native";

export function ButtonLanguage({ title, imgSrc, accessibilityLabel, ...props }) {
  return (
    <Container {...props} style={styles.buttonSpacing}>
      <Image 
        source={imgSrc} 
        accessibilityLabel={accessibilityLabel}
        style={{ width: 24, height: 24 }} 
      />
      <Title>{title}</Title>
    </Container>
  );
}

const styles = StyleSheet.create({
  buttonSpacing: {
    marginBottom: 15,
  },
});