import { Button } from "@components/Button";
import { Header } from "@components/Header";
import theme from "@theme/index";
import { Text, View } from "react-native";

export function Profile() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header showBackButton />
      <Text>Página de Perfil</Text>
      <Button variant="terciary" title="Sair" />
    </View>
  );
}
