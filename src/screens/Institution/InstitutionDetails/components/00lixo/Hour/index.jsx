import {
  Container,
  TextDescription,
  TextTitle,
  TitleContainer,
} from "./styles";
import theme from "@theme/index";
import { TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export function Hour({ description }) {

  return (
    <Container>
      <TitleContainer>
        <AntDesign name="clockcircleo" size={20} color={theme.Colors.Blue} />
        <TextTitle>Horário de Funcionamento</TextTitle>
      </TitleContainer>
      <TouchableOpacity >
        <TextDescription>{description}</TextDescription>
      </TouchableOpacity>
    </Container>
  );
}
