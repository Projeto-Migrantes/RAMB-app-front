import { Button } from "@components/Button";
import { Header } from "@components/Header";
import theme from "@theme/index";
import { Text, View } from "react-native";
import { TitleWithIcon } from "@components/TitleWithIcon";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Container } from "./styles";

export function Institution() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header showBackButton />
      <TitleWithIcon
        title="Instituições de Apoio"
        icon={
          <Ionicons
            name="business-sharp"
            size={26}
            color={theme.Colors.Purple}
          />
        }
      />
      <Container>
        <Text>Página de Institution</Text>
        <Button variant="primary" title="Card da Instituição" />
      </Container>
    </View>
  );
}
