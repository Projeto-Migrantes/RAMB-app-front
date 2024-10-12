import {
  Container,
  TextDescription,
  TextTitle,
  TitleContainer,
} from "./styles";
import theme from "@theme/index";
import { Linking, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export function Site({ link }) {
  const handlePress = () => {
    const url = `${link}`;
    Linking.openURL(url);
  };
  const formatLink = (url) => {
    return url.replace(/(^\w+:|^)\/\//, "");
  };

  return (
    <Container>
      <TitleContainer>
        <AntDesign name="earth" size={20} color={theme.Colors.Blue} />
        <TextTitle>Site</TextTitle>
      </TitleContainer>
      <TouchableOpacity onPress={handlePress}>
        <TextDescription>{formatLink(link)}</TextDescription>
      </TouchableOpacity>
    </Container>
  );
}
