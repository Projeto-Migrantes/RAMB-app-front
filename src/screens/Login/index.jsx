import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import theme from "@theme/index";
import { Text, View } from "react-native";

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
      <Text>Página de Login</Text>
      <Button variant="primary" title="Entrar" onPress={handleHome} />
      <Button
        variant="secondary"
        title="Precisa de Ajuda?"
        onPress={handleHelp}
      />
    </View>
  );
}
