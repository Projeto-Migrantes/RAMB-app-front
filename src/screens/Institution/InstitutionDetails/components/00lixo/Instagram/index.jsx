import {
  Container,
  TextDescription,
  TextTitle,
  TitleContainer,
} from "./styles";
import theme from "@theme/index";
import { Linking, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export function Instagram({ user }) {


  return (
    <Container>
      <TitleContainer>
        <AntDesign name="instagram" size={20} color={theme.Colors.Blue} />
        <TextTitle>Instagram</TextTitle>
      </TitleContainer>
      <TouchableOpacity onPress={handlePress}>
        <TextDescription>@{sanitizedUser}</TextDescription>
      </TouchableOpacity>
    </Container>
  );
}
