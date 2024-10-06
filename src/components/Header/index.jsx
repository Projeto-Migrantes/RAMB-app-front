import { BackButton, BackIcon, Container, Logo } from "./styles";

import LogoImg from "@assets/logo.svg";
import { useNavigation } from "@react-navigation/native";

export function Header({ showBackButton = false }) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <Container showBackButton={showBackButton}>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon name="leftcircleo" />
        </BackButton>
      )}
      <LogoImg width={160} height={46} />
      {showBackButton && <BackButton></BackButton>}
    </Container>
  );
}
