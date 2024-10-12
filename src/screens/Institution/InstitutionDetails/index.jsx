import { Header } from "@components/Header";
import theme from "@theme/index";
import { Text, View } from "react-native";

export function InstitutionDetails() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header showBackButton />
      <Text>Página de Detalhes da Instituição</Text>
    </View>
  );
}
