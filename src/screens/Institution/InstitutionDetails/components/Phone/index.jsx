import {
  Container,
  TextDescription,
  TextTitle,
  TitleContainer,
} from "./styles";
import theme from "@theme/index";
import { Linking, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export function Phone({ phone }) {
  const handlePress = () => {
    const url = `tel:${phone}`;
    Linking.openURL(url);
  };

  const formatPhoneNumber = (phoneNumber) => {
    // Remove todos os caracteres não numéricos
    const cleaned = ("" + phoneNumber).replace(/\D/g, "");
    // Formata o número no formato (XX) X XXXX-XXXX
    const match = cleaned.match(/^(\d{2})(\d{1})(\d{4})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]} ${match[3]}-${match[4]}`;
    }
    return phoneNumber;
  };

  return (
    <Container>
      <TitleContainer>
        <Feather name="phone" size={20} color={theme.Colors.Blue} />
        <TextTitle>Telefone</TextTitle>
      </TitleContainer>
      <TouchableOpacity onPress={handlePress}>
        <TextDescription>{formatPhoneNumber(phone)}</TextDescription>
      </TouchableOpacity>
    </Container>
  );
}
