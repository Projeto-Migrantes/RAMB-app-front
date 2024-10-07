import { Header } from "@components/Header";
import theme from "@theme/index";
import { Text, View } from "react-native";
import { TitleWithDescription } from "@components/TitleWithDescription";
import { Container } from "./styles";

export function Help() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header showBackButton />
      <TitleWithDescription
        title="Precisa de Ajuda?"
        description="Entre em contato com um dos postos de atendimento"
      />
      <Container>
        <Text>Conteúdo da página de Ajuda</Text>
      </Container>
    </View>
  );
}
