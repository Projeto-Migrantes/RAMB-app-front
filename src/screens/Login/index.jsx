import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import theme from "@theme/index";
import { Text, View } from "react-native";
import { TitleWithDescription } from "@components/TitleWithDescription";
import { Container, ForgotPassword } from "./styles";

export function Login() {
  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate("home");
  }
  function handleHelp() {
    navigation.navigate("help");
  }
  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header showBackButton />
      <TitleWithDescription
        title="Login"
        description="Use login e senha fornecidos pelo posto de atendimento."
      />
      <Container>
        <Button variant="primary" title="Entrar" onPress={handleHome} />
        <ForgotPassword>Esqueci minha senha</ForgotPassword>
        <Button
          variant="secondary"
          title="Precisa de Ajuda?"
          onPress={handleHelp}
        />
      </Container>
    </View>
  );
}
