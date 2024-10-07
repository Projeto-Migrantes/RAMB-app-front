import { Button } from "@components/Button";
import { Header } from "@components/Header";
import theme from "@theme/index";
import { Text, View } from "react-native";
import { TitleWithIcon } from "@components/TitleWithIcon";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Container } from "./styles";

export function Contact() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header showBackButton />
      <TitleWithIcon
        title="Entre em Contato"
        icon={
          <AntDesign name="contacts" size={26} color={theme.Colors.Purple} />
        }
      />
      <Container>
        <Text>Página de Entre em contato</Text>
        <Button variant="primary" title="Enviar" />
      </Container>
    </View>
  );
}
