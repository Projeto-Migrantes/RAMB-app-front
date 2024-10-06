import { Button } from "@components/Button";
import { Header } from "@components/Header";
import theme from "@theme/index";
import { Text, View } from "react-native";

export function Contact() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header showBackButton />
      <Text>Página de Entre em contato</Text>
      <Button variant="primary" title="Enviar" />
    </View>
  );
}
