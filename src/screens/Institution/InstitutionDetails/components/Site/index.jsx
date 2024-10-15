import {
  Container,
  TextDescription,
  TextTitle,
  TitleContainer,
} from "./styles";
import theme from "@theme/index";
import { Linking, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useTranslation } from "react-i18next";
import "@utils/i18n";

export function Site({ link }) {
  const { t, i18n } = useTranslation();
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
        <TextTitle>{t("Site")}</TextTitle>
      </TitleContainer>
      <TouchableOpacity onPress={handlePress}>
        <TextDescription>{formatLink(link)}</TextDescription>
      </TouchableOpacity>
    </Container>
  );
}
