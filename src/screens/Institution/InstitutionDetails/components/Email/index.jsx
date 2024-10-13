import {
  Container,
  TextDescription,
  TextTitle,
  TitleContainer,
} from "./styles";
import theme from "@theme/index";
import { Linking, TouchableOpacity } from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto';

export function Email({ email }) {
  const handlePress = () => {
    const url = `mailto:${email}`;
    Linking.openURL(url);
  };

  return (
    <Container>
      <TitleContainer>
        <Fontisto name="email" size={20} color={theme.Colors.Blue} />
        <TextTitle>Email</TextTitle>
      </TitleContainer>
      <TouchableOpacity onPress={handlePress}>
        <TextDescription>{email}</TextDescription>
      </TouchableOpacity>
    </Container>
  );
}
