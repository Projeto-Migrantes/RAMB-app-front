import {
  Container,
  TextDescription,
  TextTitle,
  TitleContainer,
} from "./styles";
import theme from "@theme/index";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Language({ description }) {
  return (
    <Container>
      <TitleContainer>
        <Ionicons name="language" size={20} color={theme.Colors.Blue} />
        <TextTitle>Idiomas Falados pela Equipe</TextTitle>
      </TitleContainer>
      <TouchableOpacity>
        <TextDescription>{description}</TextDescription>
      </TouchableOpacity>
    </Container>
  );
}
