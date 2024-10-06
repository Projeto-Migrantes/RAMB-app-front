import { Header } from "@components/Header";
import theme from "@theme/index";
import { Text, View } from "react-native";

export function Help() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header showBackButton />
      <Text>Página de Help</Text>
    </View>
  );
}
