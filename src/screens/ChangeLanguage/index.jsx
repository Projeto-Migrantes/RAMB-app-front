import { Header } from "@components/Header";
import { Container, Title } from "./styles";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import theme from "@theme/index";
import { TitleWithDescription } from "@components/TitleWithDescription";

export function ChangeLanguage() {
  const navigation = useNavigation();

  function handleChangeScreen() {
    navigation.navigate("login");
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header />
      <Container>
        <TitleWithDescription
          title="Escolha o seu Idioma:"
        />
        <Button
          variant="primary"
          title="Escolher"
          onPress={handleChangeScreen}
        />
      </Container>
    </View>
  );
}
