import { Container, Title } from "./styles";
import { StyleSheet } from "react-native";

export function ButtonLanguage({ title, imgSrc: SvgIcon, accessibilityLabel, ...props }) {
  return (
    <Container {...props} style={styles.buttonSpacing}>
      
      <SvgIcon 
        width={24} 
        height={24} 
        accessibilityLabel={accessibilityLabel} 
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
